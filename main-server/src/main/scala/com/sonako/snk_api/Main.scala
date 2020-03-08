package com.sonako.snk_api

import cats.effect.IO
import com.sonako.snk_api.common.{SSLContextSingleton, SimpleController}
import io.finch._
import io.finch.catsEffect._
import com.sonako.snk_api.service.{ChapterService, ProjectService, UserService}
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

object Main extends TwitterServer with Endpoint.Module[IO] with SimpleController {
    val hello: Endpoint[IO, Mess] = get("hello") {
        Ok(Mess("Welcome to Sonako's public API"))
    }
    
    
    def main(): Unit = {
        val server = Http.server
//          .withTransport.tls(SSLContextSingleton.getSSLContext)
          .withStatsReceiver(statsReceiver)
          .serve(
              s"0.0.0.0:${Properties.envOrElse("PORT", "8080")}",
              toCorsService
          )
        
        
        onExit {
            server.close()
        }
        
        Await.ready(adminHttpServer)
    }
    
    override def toService: Service[Request, Response] = {
        val userService = new UserService
        Bootstrap.serve[Application.Json](
            ProjectService.api :+: ChapterService.api :+: userService.getCurrentUser
        )
          .toService
    }
}