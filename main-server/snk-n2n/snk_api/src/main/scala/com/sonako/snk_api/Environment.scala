package com.sonako.snk_api

import com.sonako.snk_api.repository.ProjectsRepo
import scalikejdbc.AutoSession

object Environment {
  lazy val projectsRepo: ProjectsRepo = new ProjectsRepo()

}
