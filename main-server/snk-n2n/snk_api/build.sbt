val finchVersion = "0.31.0"
val circeVersion = "0.11.2"
val scalatestVersion = "3.0.5"
val twitterVersion = "19.12.0"

//sourceDirectory in Compile := baseDirectory.value / "resources"
lazy val root = (project in file("."))
  .settings(
	  initialCommands in console :=
		"""
		  |import io.finch._
		  |import io.finch.circe._
		  |import io.finch.generic._
		  |import io.finch.items._
		  |import com.twitter.util.{Future, Await}
		  |import com.twitter.concurrent.AsyncStream
		  |import com.twitter.io.{Buf, Reader}
		  |import com.twitter.finagle.Service
		  |import com.twitter.finagle.Http
		  |import com.twitter.finagle.http.{Request, Response, Status, Version}
		  |import io.circe._
		  |import io.circe.generic.auto._
		  |import shapeless._
      """.stripMargin
  )
  .settings(
	  organization := "com.sonako",
	  name := "snk_api",
	  version := "0.0.1-SNAPSHOT",
	  scalaVersion := "2.12.7",
	  libraryDependencies ++= Seq(
		  "com.github.finagle" %% "finchx-core" % finchVersion,
		  "com.github.finagle" %% "finchx-circe" % finchVersion,
		  "com.twitter" %% "finagle-stats" % twitterVersion,
		  "com.twitter" %% "twitter-server" % twitterVersion,
		  "io.circe" %% "circe-generic" % circeVersion,
		  "org.scalatest" %% "scalatest" % scalatestVersion % "test",
		  "org.scalikejdbc" %% "scalikejdbc" % "2.5.2",
		  "mysql" % "mysql-connector-java" % "8.0.18",
//		  "org.slf4j" % "slf4j-log4j12" % "2.0.0-alpha1",
		  "ch.qos.logback" % "logback-classic" % "1.1.7",
		  "com.twitter" %% "twitter-server-logback-classic" % twitterVersion
//		  "org.slf4j" % "slf4j-api" % "2.0.0-alpha0",
//		  "log4j" % "log4j" % "1.2.17"
	  )
  )