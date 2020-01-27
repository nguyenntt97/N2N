//package com.sonako.snk_api.service
//
//import com.sonako.snk_api.common.ImplicitDeEncoders
//import cats.effect.{ContextShift, IO}
//import com.sonako.snk_api.common.LogHelper
//import com.sonako.snk_api.model.{ChapterInfo, NewChapter, Project}
//import com.sonako.snk_api.repository.{EditorRepo, ProjectsRepo}
//import com.twitter.finagle.Service
//import com.twitter.finagle.http.{Request, Response}
//import io.finch._
//import io.finch.circe._
//
//class EditorController(env: {
//	val editorRepo: EditorRepo
//})(implicit S: ContextShift[IO]) extends Endpoint.Module[IO] with LogHelper {
//
//	import io.circe.{Decoder, Encoder}
//	import io.circe.generic.auto._
//	import io.circe.generic.semiauto
//
//	//  final val chapters: Endpoint[IO, List[Project]] = get("projects") {
//	//    Ok(env.projectsRepo.getAllProjects())
//	//  }
//
//	final val newChapter: Endpoint[IO, NewChapter] = jsonBody[NewChapter]
//
//	final def toService: Service[Request, Response] = Bootstrap
//	  .serve[Application.Json](getChapter)
//	  .toService
//}
