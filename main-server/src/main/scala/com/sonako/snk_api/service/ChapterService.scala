package com.sonako.snk_api.service

import cats.effect.IO
import com.sonako.snk_api.common.LogHelper
import com.sonako.snk_api.model.{ChapterCommit, ChapterInfo, NewChapter}
import com.sonako.snk_api.repository.EditorRepo
import io.finch._
import io.finch.circe._

object ChapterService extends Endpoint.Module[IO] with LogHelper {

	import io.circe.generic.auto._

	final val newChapter: Endpoint[IO, NewChapter] = jsonBody[NewChapter]
	final val newCommit: Endpoint[IO, ChapterCommit] = jsonBody[ChapterCommit]

	final val getChapter: Endpoint[IO, ChapterInfo] = get("chapter" :: path[Long]) { chapId: Long =>
		EditorRepo.getChapter(chapId) match {
			case Some(chapter) => Ok(chapter)
			case None => NoContent
		}
	}

	final val postChapter: Endpoint[IO, String] = post("chapter" :: path[Long] :: newCommit) { (chapId: Long, chapter: ChapterCommit) =>
		if (EditorRepo.checkExist(chapId)) {
			EditorRepo.updateChapter(chapId, chapter)
			Ok("Success")
		} else {
			NoContent[String]
		}
	}

	final val putChapter: Endpoint[IO, String] = put("chapter" :: newChapter) { chapter: NewChapter =>
		if (EditorRepo.checkExist(chapter.id))
			NoContent[String]
		else
			EditorRepo.insertChapter(chapter)

		Ok("Success")
	}

	final def api = getChapter :+: postChapter :+: putChapter
}
