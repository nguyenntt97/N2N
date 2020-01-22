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
import io.finch.Text.Plain
import io.finch.circe._

import scala.util.Properties

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
        s"0.0.0.0:${Properties.envOrElse("PORT", "8080")}",
        Bootstrap.serve[Application.Json](projectApp.getProjects :+:
          editorApp.getChapter )
          .serve[Text.Plain] (editorApp.putChapter)
          .toService
      )


    onExit {
      server.close()
    }

    Await.ready(adminHttpServer)
  }

}