# Introduction
## What is it?
This is N2N project:
- An web app for sharing LN's fan translation and other information
- This project is a combination of
  * A main API server for managing projects (Java - Spring)
  * A server for sub components: Recommender system, Editor and Information Hub features (Golang)
  * A web client (React)
  * A mobile app (Android)
## Update logs
```
- 5th Feb 2019 - Note created
```
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
##
