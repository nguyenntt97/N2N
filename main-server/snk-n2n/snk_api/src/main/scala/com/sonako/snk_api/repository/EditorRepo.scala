package com.sonako.snk_api.repository

import com.sonako.snk_api.model.{Chapter, Project}
import scalikejdbc._


class EditorRepo extends SimpleRepo {
  def getChapter(id: Long): Option[Chapter] = DB readOnly { implicit session =>
    sql"select chap_id, chap_title, chap_content FROM chapters WHERE chap_id=${id}"
      .map(rs => Chapter(rs)).single().apply()
  }

  def updateChapter(chapter: Chapter) = sql"update chapters SET chap_id=${chapter.id},chap_title=${chapter.title},chap_content=${chapter.content}"
}
