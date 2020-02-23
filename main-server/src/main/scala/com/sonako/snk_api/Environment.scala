package com.sonako.snk_api

import com.sonako.snk_api.repository.{ChapterRepo, EditorRepo, ProjectRepo, VolumeRepo}
import scalikejdbc.AutoSession

object Environment {
  lazy val projectsRepo: ProjectRepo = new ProjectRepo()
  lazy val editorRepo: EditorRepo = new EditorRepo()
  lazy val volRepo: VolumeRepo = new VolumeRepo()
  lazy val chapRepo: ChapterRepo = new ChapterRepo()
}
