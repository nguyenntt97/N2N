package com.sonako.snk_api.model

import com.sonako.snk_api.common.TimeUtils
import scalikejdbc._
import scalikejdbc.WrappedResultSet

case class Volume(id: Int, projectId: Int, title: String, synopsis: String, cover: String)
case class VolumeInfo(id: Int, projectId: Int, title: String, synopsis: String, cover: String, views: Int)

object VolumeInfo extends SQLSyntaxSupport[VolumeInfo] {
	override def tableName: String = "volumes"

	def apply(rs: WrappedResultSet): VolumeInfo = VolumeInfo(
		rs.int("vol_id"),
		rs.int("project_id"),
		rs.string("vol_title"),
		rs.string("vol_synopsis"),
		rs.string("vol_cover"),
		rs.int("vol_views")
	)
}
