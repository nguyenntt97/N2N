package com.sonako.snk_api.project

import cats.effect.{ContextShift, IO}
import com.sonako.snk_api.model.{Chapter, Project}
import com.sonako.snk_api.repository.{EditorRepo, ProjectsRepo}
import com.twitter.finagle.Service
import com.twitter.finagle.http.{Request, Response}
import io.circe.generic.auto._
import io.finch._
import io.finch.circe._

class EditorController(env: {
val editorRepo: EditorRepo
})(implicit S: ContextShift[IO]) extends Endpoint.Module[IO]{

//  final val chapters: Endpoint[IO, List[Project]] = get("projects") {
//    Ok(env.projectsRepo.getAllProjects())
//  }

  final val getChapter: Endpoint[IO, Chapter] = get("chapter"::path[Long]) { chapId: Long =>
    env.editorRepo.getChapter(chapId) match {
      case Some(chapter) => Ok(chapter)
      case None => NoContent
    }
  }

  final def toService: Service[Request, Response] = Bootstrap
    .serve[Application.Json](getChapter)
    .toService
}
