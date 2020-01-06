package com.sonako.snk_api.repository

import scalikejdbc.{AutoSession, ConnectionPool}

trait SimpleRepo {
  final val MySQLDriver = "com.mysql.jdbc.Driver"
  Class.forName(MySQLDriver)
  implicit val session = AutoSession
  ConnectionPool.singleton("jdbc:mysql://103.54.250.53:3306/snk_v1","snk","sNk@1234")
}
