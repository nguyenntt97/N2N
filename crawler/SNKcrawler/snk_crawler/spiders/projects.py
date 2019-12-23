# -*- coding: utf-8 -*-
import scrapy
from ..cleaner import clean_boilerplate


class ProjectSpider(scrapy.Spider):
    name = 'projects'
    allowed_domains = ['sonako.fandom.com']

    def start_requests(self):
        urls = ['https://sonako.fandom.com/wiki/A_Simple_Survey']
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        project_name = response.url.split("/")[-1]

        all_element = response.xpath("//*[count(child::*) = 0]").getall()
        for i, e in enumerate(all_element):
            print("\n %d--->%s" % (i, e))

        print("\n=======================".join(clean_boilerplate(all_element)))

        filename = 'projects-%s.html' % project_name
        with open(filename, 'wb') as f:
            f.write(response.body)
        self.log('Saved file %s' % filename)
