package com.sonako.snk_api.repository

import com.sonako.snk_api.model.{Project, ProjectInfo}
import scalikejdbc._

//id: Long,
//name: String,
//synopsis: String,
//author: String,
//artist: String,
//thumbnail: String,
//creator: Int,
//created: Long,
//latest: Long,
object ProjectRepo extends SimpleRepo {
  def getAllProjects(): List[Project] = (sql"""
                                            SELECT project_id, project_name, project_ava
                                            FROM projects ORDER BY project_latest DESC LIMIT 12
                                            """ map (rs => Project(rs))).list().apply()

  def getProjectInfo(projectId: Long): Option[ProjectInfo] =
    sql"""
        SELECT project_id, project_name, project_synopsis, project_author, project_artist,
        project_ava, project_creator, project_created, project_latest
        FROM projects
        WHERE project_id = $projectId
       """.map(ProjectInfo.apply).single().apply()
}
