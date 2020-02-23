package com.sonako.snk_api.model

import com.sonako.snk_api.Environment
import com.sonako.snk_api.common.TimeUtils
import scalikejdbc._
import scalikejdbc.WrappedResultSet

case class Volume(id: Int, projectId: Int, title: String, synopsis: String, cover: String)

object Volume extends SQLSyntaxSupport[Volume] {
  override def tableName: String = "volumes"

  def apply(rs: WrappedResultSet): Volume = Volume(
    rs.int("vol_id"),
    rs.int("project_id"),
    rs.string("vol_title"),
    rs.string("vol_synopsis"),
    rs.string("vol_cover"),
  )
}
