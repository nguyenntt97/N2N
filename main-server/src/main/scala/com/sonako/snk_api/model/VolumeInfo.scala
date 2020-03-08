package com.sonako.snk_api.model

import com.sonako.snk_api.repository.ChapterRepo
import scalikejdbc.{WrappedResultSet, _}

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
    ChapterRepo.getChapterByVolume(rs.long("vol_id"))
  )
}

