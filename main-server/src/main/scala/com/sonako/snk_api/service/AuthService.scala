package com.sonako.snk_api.service

import cats.effect.IO
import com.sonako.snk_api.model.AuthInfo
import com.sonako.snk_api.repository.UserRepo
import io.finch._
import io.finch.circe._
import pdi.jwt.{JwtAlgorithm, JwtCirce}

object AuthService extends Endpoint.Module[IO] {
    import io.circe.generic.auto._
    
    private final val key = "private-key"
    private final val algo = JwtAlgorithm.HS256
    
    final val authInfo: Endpoint[IO, AuthInfo] = jsonBody[AuthInfo]
    final val authen: Endpoint[IO, Any] = post("auth" :: authInfo) { authInfo: AuthInfo =>
        val claims = UserRepo.doAuthen(authInfo)
        if (claims.isEmpty) Unauthorized(new Exception("Invalid credential"))
        
        JwtCirce.encode(claims, key, algo)
    }
}
