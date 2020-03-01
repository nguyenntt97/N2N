package com.sonako.snk_api.service

import cats.MonadError
import com.sonako.snk_api.model.User
import io.finch._
import io.finch.circe._
import cats.effect._

class UserService extends Endpoint.Module[IO] {
    
    import io.circe.generic.auto._
    
    val auth: Endpoint[IO, User] = header("User").mapOutput(u =>
        if (u == "secret user") Ok(User("nguyenntt3"))
        else Unauthorized(new Exception(s"User $u is unknown"))
    ).handle {
        case e: Error.NotPresent => Unauthorized(e)
    }
    
    val getCurrentUser: Endpoint[IO, User] = get("user" :: auth) { u: User =>
        Ok(u)
    }
    
    def toService = getCurrentUser
    
}
