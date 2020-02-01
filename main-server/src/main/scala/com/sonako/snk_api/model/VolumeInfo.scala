package com.sonako.snk_api.model

import java.sql.Date
import java.util.Calendar

import com.sonako.snk_api.Environment
import com.sonako.snk_api.common.TimeUtils
import scalikejdbc._
import scalikejdbc.WrappedResultSet

case class NewVolume(id: Long, title: String, content: String, volId: Long, uploader: Long)

case class VolumeInfo(
                        id: Long,
                        title: String,
												synopsis: String,
                        view: Int,
                        cover: String,
                        chapList:List[ChapterInfo])


object VolumeInfo extends SQLSyntaxSupport[VolumeInfo] {
  override def tableName: String = "volumes"

  def apply(rs: WrappedResultSet): VolumeInfo = VolumeInfo(
    rs.long("vol_id"),
    rs.string("vol_title"),
    rs.string("vol_synopsis"),
    rs.int("vol_views"),
    rs.string("vol_cover"),
    Environment.chapRepo.getChapterByVolume(rs.long("vol_id"))
  )
}

