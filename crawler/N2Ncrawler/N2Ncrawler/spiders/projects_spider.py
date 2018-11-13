from urllib import request

import scrapy
from ..items import Project
import datetime
import json


class ProjectsSpider(scrapy.Spider):
    name = "projects"

    def start_requests(self):
        urls = [
            'https://www.novelupdates.com/series-finder/?sf=1&org=496&sort=abc&order=asc&pg=1'
        ]
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        self.log('Processed file %s' % response.url)
        for href in response.xpath('//tr[@class="bdrank"]//span/a/@href').extract():
            yield response.follow(href, self.parse_project)

        for pgHref in response.xpath('//div[@class="digg_pagination"]//em/following-sibling::a/@href'):
            yield response.follow(pgHref, self.parse)

    def parse_project(self, response):
        project = self.retrieve_project(response)
        yield project

    def retrieve_project(self, response):
        print("Retrieve PROJECT")
        project = Project()

        project["name"] = response.xpath('//div[@class="seriestitlenu"]/text()').extract_first()
        project["created_in"] = response.xpath('//div[@id="edityear"]/text()').extract_first().strip()
        project['last_updated'] = str(datetime.datetime.now())
        project["author"] = response.xpath('//div[@id="showauthors"]/a/text()').extract_first()
        project["artist"] = response.xpath('//div[@id="showartists"]/a/text()').extract_first()
        project["synopsis"] = response.xpath('//div[@id="editdescription"]/p/text()').extract_first()
        project["thumb_img"] = response.xpath('//div[@class="seriesimg"]/img/@src').extract_first()
        project["tags"] = response.xpath('//div[@id="seriesgenre"]/a/text()').extract_first()
        project["link"] = response.request.url

        project = self.retrieve_update(response, project=project)

        return project

    def retrieve_update(self, response, project=Project()):
        # Get data for chapters update

        update_list = response.xpath("//table[@id='myTable']/tbody/tr")

        if ("project" in response.meta.keys()):
            project = response.meta["project"]

        print("Retrieve UPDATE:\n\t", project)


        update_json = [] if "update_json" not in response.meta.keys() else response.meta["update_json"]
        for i in range(1, len(update_list) + 1):
            update = {}

            update['date'] = response.xpath("//table[@id='myTable']/tbody/tr[%d]/td[1]/text()" % i).extract_first()
            update['group'] = response.xpath("//table[@id='myTable']/tbody/tr[%d]/td[2]/a/text()" % i).extract_first()
            update['name'] = response.xpath("//table[@id='myTable']/tbody/tr[%d]/td[3]/a/text()" % i).extract_first()
            update['link'] = response.xpath("//table[@id='myTable']/tbody/tr[%d]/td[3]/a/@href" % i).extract_first()

            update_json.append(update)

        project['update_list'] = json.dumps(update_json)
        next_page = response.xpath("//div[@class='digg_pagination']/em/following-sibling::a/@href").extract_first()

        print("Next_page", next_page)
        if next_page is not None:
            return response.follow(url=next_page, callback=self.retrieve_update, meta={'update_json': update_json,
                                                       'project': project})
        print("\n\t=====PROJECT=======\n", project["name"])
        return project
