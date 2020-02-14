package com.sonako.snk_api.model

import java.sql.Date
import java.util.Calendar

import com.sonako.snk_api.common.TimeUtils
import scalikejdbc._
import scalikejdbc.WrappedResultSet

case class ChapterCommit(editor_content: String, text_content: String)

case class NewChapter(id: Long, title: String, content: String, volId: Long, uploader: Long)

case class ChapterInfo(id: Long,
					   title: String,
					   content: String,
					   volId: Long,
					   uploaderId: Long,
					   views: Int,
					   rating: Double,
					   update: Long)


object ChapterInfo extends SQLSyntaxSupport[ChapterInfo] {
	override def tableName: String = "chapters"

	def apply(rs: WrappedResultSet): ChapterInfo = ChapterInfo(
		rs.long("chap_id"),
		rs.string("chap_title"),
		rs.string("chap_content"),
		rs.long("volume_id"),
		rs.long("uploader"),
		rs.int("views"),
		rs.double("rating"),
		TimeUtils.dateTime2Epoch(rs.timestamp("update_date"))
	)
}

