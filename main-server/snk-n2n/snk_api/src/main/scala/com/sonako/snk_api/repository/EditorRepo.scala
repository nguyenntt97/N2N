package com.sonako.snk_api.repository

import com.sonako.snk_api.common.TimeUtils
import com.sonako.snk_api.model.{ChapterInfo, NewChapter, Project}
import scalikejdbc._


class EditorRepo extends SimpleRepo {
	def getChapter(id: Long): Option[ChapterInfo] = DB readOnly { implicit session =>
		sql"select chap_id, chap_title, chap_content, volume_id, uploader, views, rating, update_date FROM chapters WHERE chap_id=${id}"
		  .map(rs => ChapterInfo(rs)).single().apply()
	}

	def checkExist(id: Long): Boolean
	= sql"select chap_id from chapters WHERE chap_id=$id".map(rs => rs.long("chap_id")).single().apply() match {
		case Some(_: Long) => true
		case None => false
	}

	def insertChapter(chapter: NewChapter): Int
	= sql"insert into chapters(chap_title, chap_content, volume_id, uploader, update_date) VALUES (${chapter.title},${chapter.content},${chapter.volId},${chapter.uploader},${TimeUtils.epoch2DateStr()})"
	  .update().apply()

	def updateChapter(chapter: NewChapter): Int
	= sql"update chapters SET chap_title=${chapter.title},chap_content=${chapter.content} where chap_id=${chapter.id}".update().apply()
}
