# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html
import pymysql
import datetime
from .items import Project


class N2NcrawlerPipeline(object):
    def process_item(self, item, spider):
        return item


class ProjectPipeline(object):

    # def open_spider(self, spider):
    #     self.file = open('items.jl', 'w')
    #
    # def close_spider(self, spider):
    #     self.file.close()
    def __init__(self, mysql_uri, mysql_db, mysql_user, mysql_pass):
        self.mysql_uri = mysql_uri
        self.mysql_db = mysql_db
        self.mysql_user = mysql_user
        self.mysql_pass = mysql_pass

        self.name_seen = set()

    @classmethod
    def from_crawler(cls, crawler):
        return cls(
            mysql_uri=crawler.settings.get('MYSQL_URI'),
            mysql_db=crawler.settings.get('MYSQL_DATABASE'),
            mysql_user=crawler.settings.get('MYSQL_USER'),
            pymysql_pass = crawler.settings.get('MYSQL_PASS')
        )

    def open_spider(self, spider):
        self.client = pymysql.connect(self.mysql_uri, self.mysql_user, self.mysql_pass, self.mysql_db)

    def close_spider(self, spider):
        self.client.close()

    def check_dup_project(self, project):
        if len(self.name_seen) == 0:
            cursor = self.client.cursor()

            sql = "SELECT * FROM project(project_name, project_link, project_author, project_artist)"
            cursor.execute(sql)

            for row in cursor:
                project['name'] = row['project_name']
                project['link'] = row['project_link']
                project['author'] = row['project_author']
                project['artist'] = row['project_artist']

    def process_item(self, item, spider):

        # prepare a cursor object using cursor() method
        cursor = self.client.cursor()

        # execute SQL query using execute() method.
        sql = "INSERT INTO project(project_name, project_created, project_latest, project_author, project_artist, project_synopsis, project_ava, project_link) values (%s, %s, %s, %s, %s, %s, %s, %s)"
        val = (item["name"], item["created_in"],
               item["last_updated"],
               item["author"], item["artist"],
               item["synopsis"], item["thumb_img"],
               item["link"])

        cursor.execute(sql, val)
        # Fetch a single row using fetchone() method.
        # data = cursor.fetchone()

        # print("DB version: %s" % data)
        self.client.commit()

        print("%i records commited" % cursor.lastrowid)
        print(item)

        cursor.close()

