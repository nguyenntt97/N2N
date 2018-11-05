import scrapy
from ..items import Project
import datetime


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
        project = Project()

        project["name"] = response.xpath('//div[@class="seriestitlenu"]/text()').extract_first()
        project["created_in"] = int(response.xpath('//div[@id="edityear"]/text()').extract_first().strip())
        project['last_updated'] = str(datetime.datetime.now())
        project["author"] = response.xpath('//div[@id="showauthors"]/a/text()').extract_first()
        project["artist"] = response.xpath('//div[@id="showartists"]/a/text()').extract_first()
        project["synopsis"] = response.xpath('//div[@id="editdescription"]/p/text()').extract_first()
        project["thumb_img"] = response.xpath('//div[@class="seriesimg"]/img/@src').extract_first()
        project["tags"] = response.xpath('//div[@id="seriesgenre"]/a/text()').extract_first()
        project["link"] = response.request.url

        return project