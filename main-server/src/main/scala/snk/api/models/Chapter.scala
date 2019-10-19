package snk.api.models

import spray.json.DefaultJsonProtocol


case class Chapter(chapterId: Int, title: String, content: String)

object ChapterCreated
object ChapterExisted

object Chapter extends DefaultJsonProtocol{
  implicit val format = jsonFormat3(Chapter.apply)
}
