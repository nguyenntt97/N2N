package com.sonako.snk_api.model

import java.time.{Clock, Instant}

import pdi.jwt.JwtClaim
import scalikejdbc.{WrappedResultSet, _}

case class UserClaim(id: Long, name: String, role: Int)

case class AuthInfo(username: String, password: String)


object UserClaim extends SQLSyntaxSupport[UserClaim] {
    override def tableName: String = "accounts"
    implicit val clock: Clock = Clock.systemUTC

    def apply(rs: WrappedResultSet): UserClaim = UserClaim(
        rs.long("acc_id"),
        rs.string("acc_name"),
        rs.int("acc_role")
    )

    def toJwtClaims(a: UserClaim): JwtClaim = {
        JwtClaim(
            content =
                s"""{
                   |"id": ${a.id}
                   |"role": ${a.role}
                   |}""".stripMargin,
        ).issuedNow
            .expiresIn(60 * 24 * 7)
    }
}
