package com.sonako.snk_api.repository

import scalikejdbc.config._
import scalikejdbc._


trait SimpleRepo {
  DBs.setupAll()
  implicit val session = AutoSession
//  ConnectionPool.add('default,"jdbc:mysql://remotemysql.com:3306/VoJRCSRNkt","VoJRCSRNkt","qCkwDnxsc3")
}
