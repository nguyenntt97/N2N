package com.sonako.snk_api.repository

import com.sonako.snk_api.model.{ChapterInfo, VolumeInfo}
import scalikejdbc._

object ChapterRepo extends SimpleRepo {
	def getChapterByVolume(volId: Long): List[ChapterInfo] =
		sql"""
			SELECT chap_id, chap_title, chap_content, volume_id, uploader, views, rating, update_date
   		FROM chapters
      WHERE volume_id = $volId
   """.map(rs => ChapterInfo.apply(rs)).list().apply()
}
