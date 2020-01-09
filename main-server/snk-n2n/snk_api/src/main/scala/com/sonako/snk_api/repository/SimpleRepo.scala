package com.sonako.snk_api.repository

import scalikejdbc.{AutoSession, ConnectionPool}

trait SimpleRepo {
//  final val MySQLDriver = "com.mysql.jdbc.Driver"
//  Class.forName(MySQLDriver)
  implicit val session = AutoSession
  ConnectionPool.singleton("jdbc:mysql://localhost:3306/n2n_v1","root","elKINO@2511")
}
