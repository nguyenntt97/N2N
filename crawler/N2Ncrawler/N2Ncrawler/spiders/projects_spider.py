import scrapy


class ProjectsSpider(scrapy.Spider):
    name = "projects"

    def start_requests(self):
        urls = [
            'https://www.novelupdates.com/series-finder/?sf=1&org=496&sort=abc&order=asc&pg=1'
        ]
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        page = response.url[-1]
        filename = "projects-%s.html" % page
        with open(filename, 'wb') as f:
            f.write(response.body)
        self.log('Saved file %s' % filename)