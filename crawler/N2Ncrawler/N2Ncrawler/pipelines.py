# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html
import pymysql
import datetime

from .utils.verifier import laven_dist
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

        self.projects_seen = {}

    @classmethod
    def from_crawler(cls, crawler):
        return cls(
            mysql_uri=crawler.settings.get('MYSQL_URI'),
            mysql_db=crawler.settings.get('MYSQL_DATABASE'),
            mysql_user=crawler.settings.get('MYSQL_USER'),
            mysql_pass=crawler.settings.get('MYSQL_PASS')
        )

    def open_spider(self, spider):
        self.client = pymysql.connect(self.mysql_uri, self.mysql_user, self.mysql_pass, self.mysql_db)

    def close_spider(self, spider):
        self.client.close()

    def check_dup_project(self, project):

        if len(self.projects_seen) == 0:
            cursor = self.client.cursor(pymysql.cursors.DictCursor)

            sql = "SELECT project_name, project_link, project_author, project_artist FROM project"
            cursor.execute(sql)

            for row in cursor:
                pj = Project()

                pj['name'] = row['project_name']
                pj['link'] = row['project_link']
                pj['author'] = row['project_author']
                pj['artist'] = row['project_artist']

                if (not pj['author'] in self.projects_seen):
                    self.projects_seen[pj['author']] = []

                self.projects_seen[pj['author']].append(pj)

                print('Get project from DB: ', pj)

        same_auth_prjs = []

        if project['author'] in self.projects_seen:
            same_auth_prjs = self.projects_seen[project['author']]

        print('====%s====' % project['name'], len(same_auth_prjs))

        top_result = None
        for prj in same_auth_prjs:
            a = prj['name'].lower()
            b = project['name'].lower()

            score = 0 if a==b else laven_dist(prj['name'], project['name'])/min(len(a), len(b))

            if (score < 0.1):
                top_result = prj
            print(score, prj['name'])

        if not top_result is None:
            return top_result
        else:
            return None



    def process_item(self, item, spider):
        exist_proj = self.check_dup_project(item)

        if (exist_proj is None):
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
        else:
            print("Existed")