package services

import models.{Project, Projects}

object ProjectService {

  def getAllProjects(): Seq[Project] = {
    Projects.listAll
  }
}
