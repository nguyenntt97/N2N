name := """snk-n2n"""
organization := "snk2.core"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.13.0"

libraryDependencies += guice
libraryDependencies += "org.scalatestplus.play" %% "scalatestplus-play" % "4.0.3" % Test
libraryDependencies += "mysql" % "mysql-connector-java" % "5.1.24"
libraryDependencies +=  "com.typesafe.play" %% "play-slick" % "5.0.0-M7"
libraryDependencies +=  "com.typesafe.play" %% "play-slick-evolutions" % "5.0.0-M7"

// Adds additional packages into Twirl
//TwirlKeys.templateImports += "snk2.core.controllers._"

// Adds additional packages into conf/routes
// play.sbt.routes.RoutesKeys.routesImport += "snk2.core.binders._"
