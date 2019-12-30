package com.sonako.snk_api

import cats.effect.IO
import io.finch._
import io.finch.catsEffect._
import com.sonako.snk_api.project.ProjectController
import com.twitter.finagle.http.{Request, Response, Status}
import com.twitter.finagle.{Http, Service}
import com.twitter.server.TwitterServer
import com.twitter.util.{Await, Future}

import scala.concurrent.ExecutionContext
import io.circe.generic.auto._
import io.finch.circe._

case class Mess(msg: String)
object Main extends TwitterServer with Endpoint.Module[IO]{
  val api: Endpoint[IO, Mess] = get("hello") {
    Ok(Mess("Hello, World"))
  }

  val service = new Service[Request, Response] {
    def apply(request: Request) = {
      val response = Response(request.version, Status.Ok)
      response.contentString = "hello"
      Future.value(response)
    }
  }
  def main(): Unit = {
    val app = new ProjectController(Environment)(IO.contextShift(ExecutionContext.global))
    val server = Http.server
      .withStatsReceiver(statsReceiver)
      .serve(":8081", app.toService)


    onExit{
     server.close()
    }

    Await.ready(adminHttpServer)
  }

}