package com.sonako.snk_api.common

import java.sql
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Formatter.DateTime

object TimeUtils {
	lazy val DATE_FORMAT = "yyyy-MM-dd hh:mm:ss"
	lazy val dateFormatter = new SimpleDateFormat(DATE_FORMAT)

	def epoch2DateStr(t: Long = System.currentTimeMillis()): String = dateFormatter.format(t)
	def dateStr2Epoch(t: String): Date = dateFormatter.parse(t)
	def dateTime2Epoch(t: sql.Timestamp): Long = t.getTime
}
