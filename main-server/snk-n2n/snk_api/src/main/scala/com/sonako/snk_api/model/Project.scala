package com.sonako.snk_api.model

import com.sonako.snk_api.IItem
import scalikejdbc._

case class Project(id: Long, name: String, thumbnail: String)
object Project extends SQLSyntaxSupport[Project] {
  override val connectionPoolName = 'my_pool
  override def tableName: String = "projects"
  def apply(rs: WrappedResultSet): Project = Project(
    rs.long("project_id"),
    rs.string("project_name"),
    rs.string("project_ava")
  )
}
