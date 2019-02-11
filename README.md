# Introduction
## What is it?
This is N2N project:
- An web app for sharing LN's fan translation and other information
- This project is a combination of
  * A main web service for main components (Java - Spring)
  * A web service for other sub-components: Recommender system, Editor and Information Hub, Chatting features (Golang)
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
  * ThinhDV - ducthinhvu96@gmail.com
  * ThaiPCH - futoshihito@gmail.com
  * ChauTL - longchau21@gmail.com

# Database recovery and data import

- Extract zip file
- Create your own database and tables in Idea (table name must match)
- Config your properties file in Spring project as following:

**application.properties**
```
spring.datasource.username = root
spring.datasource.password = password
```


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
#### Project service
(Waiting for updates)

## Sub API
### Recommender system
(Waiting for updates)

### Editor features
(Waiting for updates)

### Information hub features
(Waiting for updates)

## Web Client
### Views
(Waiting for updates)

# Bugs
## Web app
### Error: ENOSPC: System limit for number of file watchers reached...
#### Output
```
Starting the development server...
 
events.js:167
      throw er; // Unhandled 'error' event
      ^
 
Error: ENOSPC: System limit for number of file watchers reached, watch '/home/elpsychris/projects/test/N2N/nanno-app/public'
    at FSWatcher.start (internal/fs/watchers.js:165:26)
    at Object.watch (fs.js:1254:11)
    at createFsWatchInstance (/home/elpsychris/projects/test/N2N/nanno-app/node_modules/chokidar/lib/nodefs-handler.js:37:15)
    at setFsWatchListener (/home/elpsychris/projects/test/N2N/nanno-app/node_modules/chokidar/lib/nodefs-handler.js:80:15)
    at FSWatcher.NodeFsHandler._watchWithNodeFs (/home/elpsychris/projects/test/N2N/nanno-app/node_modules/chokidar/lib/nodefs-handler.js:232:14)
    at FSWatcher.NodeFsHandler._handleDir (/home/elpsychris/projects/test/N2N/nanno-app/node_modules/chokidar/lib/nodefs-handler.js:422:19)
    at FSWatcher.<anonymous> (/home/elpsychris/projects/test/N2N/nanno-app/node_modules/chokidar/lib/nodefs-handler.js:470:19)
    at FSWatcher.<anonymous> (/home/elpsychris/projects/test/N2N/nanno-app/node_modules/chokidar/lib/nodefs-handler.js:475:16)
    at FSReqWrap.oncomplete (fs.js:155:5)
Emitted 'error' event at:
    at FSWatcher._handleError (/home/elpsychris/projects/test/N2N/nanno-app/node_modules/chokidar/index.js:260:10)
    at createFsWatchInstance (/home/elpsychris/projects/test/N2N/nanno-app/node_modules/chokidar/lib/nodefs-handler.js:39:5)
    at setFsWatchListener (/home/elpsychris/projects/test/N2N/nanno-app/node_modules/chokidar/lib/nodefs-handler.js:80:15)
    [... lines matching original stack trace ...]
    at FSReqWrap.oncomplete (fs.js:155:5)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! nanno-app@0.1.0 start: `react-scripts start`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the nanno-app@0.1.0 start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
 
npm ERR! A complete log of this run can be found in:
npm ERR!     /home/elpsychris/.npm/_logs/2019-02-07T15_56_25_668Z-debug.log
elpsychris@tnguyen:~/projects/test/N2N/nanno-app$ script log.txt
Script started, file is log.txt
elpsychris@tnguyen:~/projects/test/N2N/nanno-app$
```
#### How to fix it
This is not a bug from npm and can only be met when you use `npm run start`

As Danrley Willyan said:

> npm or a process controlled by it is watching too many files. Updating max_user_watches on the build node can fix it forever. For debian put the following on terminal:
> `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`
>
> The full discussion can be found at [StackOverflow - Node.js: what is ENOSPC error and how to solve?](https://stackoverflow.com/a/53221475/6356411)

**DN**: *This is ONLY the temporary measurement and will be fixed completely in the future.*
