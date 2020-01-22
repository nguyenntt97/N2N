# Introduction

This is N2N core API (in development) that includes:

- Projects

- Volumes

- Chapters

- Accounts

### Changelog
```
- 22/01/20: Document created with API with basics CRUD template added
```
  
### Getting started

Remote dev database is available:
```
db.default.driver="com.mysql.cj.jdbc.Driver"
db.default.url="jdbc:mysql://remotemysql.com:3306/VoJRCSRNkt"
db.default.user="VoJRCSRNkt"
db.default.password="password"
```

Replace the true password into the conf configuration file (type-safe) at `src/main/resources`

### Tech stack

Database:

- Main DB - MySQL

Main API:

- Finch Framework (Scala) with Netty