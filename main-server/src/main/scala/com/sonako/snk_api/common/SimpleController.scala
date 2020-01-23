package com.sonako.snk_api.common

import com.twitter.finagle.Service
import com.twitter.finagle.http.filter.Cors.{HttpFilter, Policy}
import com.twitter.finagle.http.{Request, Response}

trait SimpleController {
  val policy: Policy = Policy(
    allowsOrigin = _ => Some("*"),
    allowsMethods = _ => Some(Seq("GET", "POST")),
    allowsHeaders = _ => Some(Seq("Accept"))
  )

  def toService: Service[Request, Response]

  def toCorsService: Service[Request, Response] = {
    new HttpFilter(policy).andThen(toService)
  }
}
