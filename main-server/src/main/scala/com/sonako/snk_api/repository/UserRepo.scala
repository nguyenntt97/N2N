package com.sonako.snk_api.repository

import com.sonako.snk_api.model.{AuthInfo, Project, ProjectInfo, UserClaim}
import scalikejdbc._

object UserRepo extends SimpleRepo {
  def doAuthen(authInfo: AuthInfo): Option[UserClaim] =
    sql"""
      SELECT acc_id, acc_name, acc_role FROM accounts WHERE acc_name = ${authInfo.username} AND acc_pass = ${authInfo.password}
    """.map(UserClaim.apply).single().apply()
  
  def getProjectInfo(projectId: Long): Option[ProjectInfo] =
    sql"""
        SELECT project_id, project_name, project_synopsis, project_author, project_artist,
        project_ava, project_creator, project_created, project_latest
        FROM projects
        WHERE project_id = $projectId
       """.map(ProjectInfo.apply).single().apply()
}
