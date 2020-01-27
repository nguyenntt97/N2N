package com.sonako.snk_api.service

import cats.effect.{ContextShift, IO}
import com.sonako.snk_api.common.{LogHelper, SimpleController}
import com.sonako.snk_api.model.{ChapterInfo, NewChapter}
import com.sonako.snk_api.repository.EditorRepo
import com.twitter.finagle.Service
import com.twitter.finagle.http.{Request, Response}
import io.finch._
import io.finch.circe._

class VolService(env: {
	val editorRepo: EditorRepo
})(implicit S: ContextShift[IO]) extends Endpoint.Module[IO] with LogHelper {

	import io.circe.generic.auto._

	final val newChapter: Endpoint[IO, NewChapter] = jsonBody[NewChapter]

	final val getChapter: Endpoint[IO, ChapterInfo] = get("chapter" :: path[Long]) { chapId: Long =>
		env.editorRepo.getChapter(chapId) match {
			case Some(chapter) => Ok(chapter)
			case None => NoContent
		}
	}

	final val putChapter: Endpoint[IO, String] = put("chapter" :: newChapter) { chapter: NewChapter =>
		if (env.editorRepo.checkExist(chapter.id))
			env.editorRepo.updateChapter(chapter)
		else
			env.editorRepo.insertChapter(chapter)

		Ok("Success")
	}

	final def toService: Service[Request, Response] = Bootstrap
	  .serve[Application.Json](getChapter)
	  .toService
}
