package com.sonako.snk_api.service

import cats.effect._
import com.sonako.snk_api.model.{Message, Project, ProjectInfo}
import com.sonako.snk_api.repository.ProjectRepo
import io.circe.generic.auto._
import io.finch._
import io.finch.circe._
import shapeless._

class ProjectService(env: {
val projectsRepo: ProjectRepo
val userService: UserService
}) extends Endpoint.Module[IO] {

  final val getProjects: Endpoint[IO, List[Project]] = get("projects") {
    Ok(env.projectsRepo.getAllProjects())
  }

  final val getProject: Endpoint[IO, ProjectInfo] = get("project" :: param[Long]("id")) { id: Long =>
    env.projectsRepo.getProjectInfo(id) match {
      case Some(pInfo) => Ok(pInfo)
      case None => NoContent
    }
  }

  def toService = getProjects :+: getProject
}
