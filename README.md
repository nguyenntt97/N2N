# Introduction
## What is it?
This is N2N project:
- An web app for sharing LN's fan translation and other information
- This project is a combination of
  * A main API server for managing projects (Java - Spring)
  * A server for sub components: Recommender system, Editor and Information Hub features (Golang)
  * A web client (React)
  * A mobile app (Android)

## System Requirements
- OS: Ubuntu (version)
- DB: 
  - MySQL (version)
  - ...
- Softwares:
  - NodeJS (version)
  - Maven (version)
  - Java (version)
  - Golang (version)
  - Docker (version)

## Update logs
```
- 5th Feb. 2019 - Note created
```

## Contacts
We are the Sonako Dev Team
* Sonako fanpage can be found at [Sonako Fanpage](https://www.facebook.com/SonakoWiki/)
* Sonako main website can be found at [Sonako](https://sonako.fandom.com/wiki/Sonako_Light_Novel)

* Found a problem? Contact any of our team members:
  * NguyenNTT - rohirrim3105@gmail.com
  * ThinhDV - n/a
  * ThaiPCH - n/a

# Database recovery and data import
---
- Extract zip file
- Create your own database and tables in Idea (table name must match)
- Config your properties file in Spring project as following:
![config db](https://raw.githubusercontent.com/TuanDSE62171/RestaurantApp/master/config_db.png)
- Open the database explorer by navigating `View -> Tool Windows -> Database`
- Right click on each table and select `Import Data from File...`
- In the dialog choose corresponding table name (CSV) -> `OK`
- Click `OK`
# Modules Specification
## Main API
### Entities Definition
* Projects: The API allows user to create new project of a LN title (or LN series)
* Volumes: A project (or a LN title) includes many vols in it. A vol (or Arc in WN) is a group of many chapters
* Chapters: A vol then seperated into more small chapters
* Accounts
* Genre
* Tags

### Roles
* Admin
* User

### API Endpoints

## Sub API
## 
