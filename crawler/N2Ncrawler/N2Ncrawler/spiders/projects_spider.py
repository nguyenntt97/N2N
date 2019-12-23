# coding=utf-8

from urllib3 import request

import scrapy
from ..items import Project
import datetime
import json


class ProjectsSpider(scrapy.Spider):
    name = "projects"

    def start_requests(self):
        urls = [
            'https://ln.hako.re/danh-sach?truyendich=1&dangtienhanh=1&tamngung=1&hoanthanh=1&sapxep=tentruyen'
        ]
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        self.log('Processed file %s' % response.url)
        for href in response.xpath('//div[@class="thumb-wrapper"]/a/@href').extract():
            yield response.follow(href, self.parse_project)

        for pgHref in response.xpath('//div[@class="pagination_wrap"]/a/@href'):
            yield response.follow(pgHref, self.parse)

    def parse_project(self, response):
        project = self.retrieve_project(response)
        yield project

    def retrieve_project(self, response):
        print("Retrieve PROJECT")
        project = Project()

        project["name"] = response.xpath(
            '//span[@class="series-name"]/a/text()').extract_first()
        # project["created_in"] = response.xpath(
        #     '//div[@id="edityear"]/text()').extract_first().strip()
        # project['last_updated'] = str(datetime.datetime.now())
        project["author"] = response.xpath(
            u'//span[text()="Tác giả:"]/parent::div//a/text()').extract_first()
        project["artist"] = response.xpath(
            u'//span[text()="Họa sĩ:"]/parent::div//a/text()').extract_first()
        project["synopsis"] = response.xpath(
            '//div[@class="summary-content"]/p/text()').extract_first()
        # project["thumb_img"] = response.xpath(
        #     '//div[@class="seriesimg"]/img/@src').extract_first()
        project["tags"] = response.xpath(
            '//div[@class="series-gernes"]/a/text()').extract_first()
        project["link"] = response.request.url

        print(project + "\n")
        # project = self.retrieve_update(response, project=project)

        return project

    def retrieve_update(self, response, project=Project()):
        # Get data for chapters update

        update_list, update_id = (response.xpath(
            '//header[contains(@id, "volume")]//a/text()'),
            response.xpath('//header[contains(@id, "volume")]/@id'))

        if ("project" in response.meta.keys()):
            project = response.meta["project"]

        print("Retrieve UPDATE:\n\t", project)

        update_json = [] if "update_json" not in response.meta.keys(
        ) else response.meta["update_json"]
        for i in range(1, len(update_list) + 1):
            update = {}
            volname = update_id[i-1]

            chap_title, chap_links = (response.xpath(
                '//header[contains(@id, "%s")]/following-sibling::main//ul/li/div[@class="chapter-name"]//a/text()' % volname),
                response.xpath(
                '//header[contains(@id, "%s")]/following-sibling::main//ul/li/div[@class="chapter-name"]//a/@href' % volname)
            )

            update_content = {}
            update_content["vol"] = update_list[i-1]
            update_content["chaps"] = []

            for j in range(len(chap_title)):
                new_chap = {}
                new_chap["title"] = chap_title[j]
                new_chap["links"] = chap_links[j]
                update_content["chaps"].append(new_chap)
                print("Append %s" % new_chap["title"])

            update_json.append(update)

        project['update_list'] = json.dumps(update_json)

        print("\n\t=====PROJECT=======\n", project["name"])
        return project
