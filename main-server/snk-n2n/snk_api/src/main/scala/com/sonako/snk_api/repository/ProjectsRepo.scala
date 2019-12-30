package com.sonako.snk_api.repository

import com.sonako.snk_api.model.Project
import scalikejdbc._


class ProjectsRepo extends SimpleRepo {
  def getAllProjects(): List[Project] = sql"select project_id, project_name FROM projects LIMIT 10".map(rs => Project(rs)).list().apply()
}
