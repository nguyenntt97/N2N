package com.sonako.snk_api

import com.sonako.snk_api.repository.{EditorRepo, ProjectsRepo}
import scalikejdbc.AutoSession

object Environment {
  lazy val projectsRepo: ProjectsRepo = new ProjectsRepo()
  lazy val editorRepo: EditorRepo = new EditorRepo()
}
