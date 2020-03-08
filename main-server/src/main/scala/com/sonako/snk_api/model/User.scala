package com.sonako.snk_api.model

import java.time.Instant

import io.circe._
import io.circe.parser._
import io.circe.syntax._
import pdi.jwt.JwtClaim
import scalikejdbc.{WrappedResultSet, _}

case class UserClaim(id: Long, name: String, role: Int)

case class AuthInfo(id: String, password: String)


object UserClaim extends SQLSyntaxSupport[UserClaim] {
    override def tableName: String = "accounts"
    
    def apply(rs: WrappedResultSet): UserClaim = UserClaim(
        rs.long("acc_id"),
        rs.string("acc_name"),
        rs.int("acc_role")
    )
    
    def toJwtClaims(userClaim: UserClaim): Unit = {
        JwtClaim(
            content =
              s"""{
                 |"id": ${userClaim.id}
                 |"role": ${userClaim.role}
                 |}""".stripMargin,
            expiration = Some(Instant.now.plusSeconds(60 * 60 * 24 * 7).getEpochSecond),
            issuedAt = Some(Instant.now().getEpochSecond)
        )
    }
}