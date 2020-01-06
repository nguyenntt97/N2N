package com.sonako.snk_api.model

import scalikejdbc._
import scalikejdbc.WrappedResultSet

case class Chapter(id: Long, title: String, content: String)

object Chapter extends SQLSyntaxSupport[Chapter] {
  override def tableName: String = "chapters"

  def apply(rs: WrappedResultSet): Chapter = Chapter(
    rs.long("chap_id"),
    rs.string("chap_title"),
    rs.string("chap_content")
  )
}
