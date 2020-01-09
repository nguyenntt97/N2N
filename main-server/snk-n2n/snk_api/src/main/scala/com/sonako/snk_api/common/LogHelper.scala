package com.sonako.snk_api.common

import com.twitter.logging.Logger


trait LogHelper {
	val loggerName = this.getClass.getName
	lazy val logger = Logger.get(loggerName)
}
