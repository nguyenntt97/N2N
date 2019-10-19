package snk.api.reader

import akka.actor._
import akka.util.Timeout
import snk.api.models.{Chapter, ChapterCreated, ChapterExisted}
import spray.http.{StatusCode, StatusCodes}
import spray.httpx.SprayJsonSupport._
import spray.routing._

import scala.concurrent.duration._


class ReaderInterface extends HttpServiceActor with RestApi {
  override def receive = runRoute(routes)
}

trait RestApi extends HttpService with ActorLogging {
  actor: Actor =>
  implicit val timeout = Timeout(10 seconds)
  var chapters = Vector[Chapter]()


  def routes: Route =
    pathPrefix("chapters") {
      pathEnd {
        post {
          entity(as[Chapter]) { chapter =>
            requestContext =>
              val responder = createResponder(requestContext)
              createChapter(chapter) match {
                case true => responder ! ChapterCreated
                case _ => responder ! ChapterExisted
              }
          }

        }
        get {
          complete {
            <h1>Say hello</h1>
          }
        }
      }
    }

  private def createChapter(chapter: Chapter): Boolean = {
    val doesNotExist = !chapters.exists(_.chapterId == chapter.chapterId)
    if (doesNotExist) {
      chapters = chapters :+ chapter
    }
    doesNotExist
  }

  private def createResponder(requestContext: RequestContext) = {
    context.actorOf(Props(new Responder(requestContext)))
  }
}

class Responder(requestContext: RequestContext) extends Actor with ActorLogging {
  def receive = {
    case ChapterCreated =>
      requestContext.complete(StatusCodes.Created)
      killYourself

    case ChapterExisted =>
      requestContext.complete(StatusCodes.OK)
      killYourself
  }

  private def killYourself = self ! PoisonPill
}
