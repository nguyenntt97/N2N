package com.sonako.snk_api

import cats.effect.IO
import io.finch._
import io.finch.catsEffect._
import com.sonako.snk_api.project.{EditorController, ProjectController}
import com.twitter.finagle.http.{Request, Response, Status}
import com.twitter.finagle.{Http, Service}
import com.twitter.server.TwitterServer
import com.twitter.util.{Await, Future}

import scala.concurrent.ExecutionContext
import io.circe.generic.auto._
import io.finch.circe._

case class Mess(msg: String)

object Main extends TwitterServer with Endpoint.Module[IO] {
  val api: Endpoint[IO, Mess] = get("hello") {
    Ok(Mess("Hello, World"))
  }


  def main(): Unit = {
    val projectApp = new ProjectController(Environment)(IO.contextShift(ExecutionContext.global))
    val editorApp = new EditorController(Environment)(IO.contextShift(ExecutionContext.global))
    val server = Http.server
      .withStatsReceiver(statsReceiver)
      .serve(
        ":8081",
        Bootstrap.serve[Application.Json](projectApp.getProjects :+: editorApp.getChapter)
          .toService
      )


    onExit {
      server.close()
    }

    Await.ready(adminHttpServer)
  }

}