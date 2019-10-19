package snk.api

import akka.actor._
import akka.io.IO
import akka.pattern.ask
import akka.util.Timeout
import com.typesafe.config.ConfigFactory
import snk.api.reader.ReaderInterface
import spray.can.Http
import scala.language.postfixOps

import scala.concurrent.duration._

object Main extends App {
  val config = ConfigFactory.load()
  val host = config.getString("http.host")
  val port = config.getInt("http.port")

  implicit val system = ActorSystem("reader-service")

  val api = system.actorOf(Props(new ReaderInterface()), "readerInterface")
  implicit val executationContext = system.dispatcher
  implicit val timeout = Timeout(10 seconds)

  IO(Http).ask(Http.Bind(listener = api, interface = host, port = port))
    .mapTo[Http.Event]
    .map {
      case Http.Bound(address) => println(s"REST interface bound to $address")
      case Http.CommandFailed(cmd) => println("REST interface could not be bound to " +
        s"($host:$port, ${cmd.failureMessage}")
    }
}
