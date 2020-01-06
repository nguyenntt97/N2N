package com.sonako.snk_api.project

import cats.effect.{ContextShift, IO}
import cats.effect.concurrent.Ref
import com.sonako.snk_api.model.{Message, Project}
import com.sonako.snk_api.repository.ProjectsRepo
import com.twitter.finagle.Service
import com.twitter.finagle.http.{Request, Response, Status}
import io.circe.generic.auto._
import io.finch._
import io.finch.circe._

class ProjectController(env: {
val projectsRepo: ProjectsRepo
})(implicit S: ContextShift[IO]) extends Endpoint.Module[IO]{

  final val getProjects: Endpoint[IO, List[Project]] = get("projects") {
    Ok(env.projectsRepo.getAllProjects())
  }

  final def toService: Service[Request, Response] = Bootstrap
    .serve[Application.Json](getProjects)
    .toService
}
