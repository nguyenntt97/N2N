package com.sonako.snk_api

import com.sonako.snk_api.repository.{ChapterRepo, EditorRepo, ProjectRepo, VolumeRepo}
import com.sonako.snk_api.service.UserService
import scalikejdbc.AutoSession

object Environment {
  lazy val userService = new UserService
}
