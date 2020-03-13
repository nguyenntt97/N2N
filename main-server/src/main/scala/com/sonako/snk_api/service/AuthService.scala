package com.sonako.snk_api.service

import cats.effect.IO
import com.sonako.snk_api.model.{AuthInfo, UserClaim}
import com.sonako.snk_api.repository.UserRepo
import io.finch._
import io.finch.circe._
import pdi.jwt.{Jwt, JwtAlgorithm, JwtClaim}
import java.time.Clock

import com.sonako.snk_api.service.ChapterService.putChapter
import com.twitter.finagle.http.Request
import io.finch.Endpoint.Result

class AuthenticatedEndpoint[F, A](e: Endpoint[F, A])(implicit auth: Request => Boolean) extends Endpoint[F, A] {self =>
    override final def apply(input: Input): Result[F, A] = {
        if (auth(input.request)) {
            e(input)
        } else {
            EndpointResult.Matched[Nothing](input, Rerunnable)
        }
    }
}

object AuthService extends Endpoint.Module[IO] {

    import io.circe.generic.auto._

    private final val key = "private-key"
    private final val algorithm = JwtAlgorithm.HS256

    final val authInfo: Endpoint[IO, AuthInfo] = jsonBody[AuthInfo]
    final val authenticate: Endpoint[IO, String] = post("auth" :: authInfo) { authInfo: AuthInfo =>
        val claims = UserRepo.doAuthen(authInfo)
        claims match {
            case Some(c) =>
                val token = Jwt.encode(UserClaim.toJwtClaims(c))
                Ok().withHeader("Token", token)
            case None => Unauthorized(new Exception("Invalid credential"))
        }
    }

    final def api = authenticate
}
