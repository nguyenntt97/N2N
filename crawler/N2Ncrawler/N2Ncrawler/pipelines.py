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


    def process_item(self, item, spider):
        db = pymysql.connect("localhost", "root", "elKINO@2511", "n2n_v1")

        # prepare a cursor object using cursor() method
        cursor = db.cursor()

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
        db.commit()

        print("%i records commited" % cursor.lastrowid)
        print(item)
