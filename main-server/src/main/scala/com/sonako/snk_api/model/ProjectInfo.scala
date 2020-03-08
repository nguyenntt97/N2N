package com.sonako.snk_api.model

import com.sonako.snk_api.common.TimeUtils
import com.sonako.snk_api.repository.VolumeRepo
import scalikejdbc.{WrappedResultSet, _}

case class NewProject(id: Long, title: String, content: String, volId: Long, uploader: Long)

case class ProjectInfo(
                        id: Long,
                        name: String,
                        synopsis: String,
                        author: String,
                        artist: String,
                        thumbnail: String,
                        creator: Option[Int],
                        created: Long,
                        latest: Long,
                        volInfo: List[VolumeInfo])


object ProjectInfo extends SQLSyntaxSupport[ProjectInfo] {
  override def tableName: String = "projects"

  def apply(rs: WrappedResultSet): ProjectInfo = ProjectInfo(
    rs.long("project_id"),
    rs.string("project_name"),
    rs.string("project_synopsis"),
    rs.string("project_author"),
    rs.string("project_artist"),
    rs.string("project_ava"),
    rs.intOpt("project_creator"),
    rs.int("project_created"),
    TimeUtils.dateTime2Epoch(rs.timestamp("project_latest")),
    VolumeRepo.getVolListByProject(rs.long("project_id"))
  )
}

