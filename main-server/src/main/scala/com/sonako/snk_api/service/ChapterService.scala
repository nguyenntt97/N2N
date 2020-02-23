package com.sonako.snk_api.service

import cats.effect.{ContextShift, IO}
import com.sonako.snk_api.common.LogHelper
import com.sonako.snk_api.model.{ChapterCommit, ChapterInfo, NewChapter}
import com.sonako.snk_api.repository.EditorRepo
import com.twitter.finagle.Service
import com.twitter.finagle.http.{Request, Response}
import io.finch._
import io.finch.circe._

class ChapterService(env: {
	val editorRepo: EditorRepo
}) extends Endpoint.Module[IO] with LogHelper {

	import io.circe.generic.auto._

	final val newChapter: Endpoint[IO, NewChapter] = jsonBody[NewChapter]
	final val newCommit: Endpoint[IO, ChapterCommit] = jsonBody[ChapterCommit]

	final val getChapter: Endpoint[IO, ChapterInfo] = get("chapter" :: path[Long]) { chapId: Long =>
		env.editorRepo.getChapter(chapId) match {
			case Some(chapter) => Ok(chapter)
			case None => NoContent
		}
	}

	final val postChapter: Endpoint[IO, String] = post("chapter" :: path[Long] :: newCommit) { (chapId: Long, chapter: ChapterCommit) =>
		if (env.editorRepo.checkExist(chapId)) {
			env.editorRepo.updateChapter(chapId, chapter)
			Ok("Success")
		} else {
			NoContent[String]
		}
	}

	final val putChapter: Endpoint[IO, String] = put("chapter" :: newChapter) { chapter: NewChapter =>
		if (env.editorRepo.checkExist(chapter.id))
			NoContent[String]
		else
			env.editorRepo.insertChapter(chapter)

		Ok("Success")
	}

	final def toService: Service[Request, Response] = Bootstrap
	  .serve[Application.Json](getChapter)
	  .toService
}
