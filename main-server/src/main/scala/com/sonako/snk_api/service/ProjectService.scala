package com.sonako.snk_api.service

import cats.effect.{ContextShift, IO}
import cats.effect.concurrent.Ref
import com.sonako.snk_api.common.SimpleController
import com.sonako.snk_api.model.{Message, Project, ProjectInfo}
import com.sonako.snk_api.repository.ProjectRepo
import com.twitter.finagle.Service
import com.twitter.finagle.http.{Request, Response, Status}
import io.circe.generic.auto._
import io.finch._
import io.finch.circe._

class ProjectService(env: {
val projectsRepo: ProjectRepo
})(implicit S: ContextShift[IO]) extends Endpoint.Module[IO] {

  final val getProjects: Endpoint[IO, List[Project]] = get("projects") {
    Ok(env.projectsRepo.getAllProjects())
  }

  final val getProject: Endpoint[IO, ProjectInfo] = get("project" :: param[Long]("id")) { id: Long =>
    env.projectsRepo.getProjectInfo(id) match {
      case Some(pInfo) => Ok(pInfo)
      case None => NoContent
    }
  }

  def toService: Service[Request, Response] = Bootstrap
    .serve[Application.Json](getProjects :+: getProject)
    .toService
}
