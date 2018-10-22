# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class N2NcrawlerItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    pass


class Project(scrapy.Item):
    id = scrapy.Field();
    name = scrapy.Field();
    nameAlter = scrapy.Field();
    createdIn = scrapy.Field();
    lastUpdated = scrapy.Field();
    author = scrapy.Field();
    artist = scrapy.Field();
    synopsis = scrapy.Field();
    rating = scrapy.Field();
    tags = scrapy.Field();
    genres = scrapy.Field();
    thumbImg = scrapy.Field();
    link = scrapy.Field();
