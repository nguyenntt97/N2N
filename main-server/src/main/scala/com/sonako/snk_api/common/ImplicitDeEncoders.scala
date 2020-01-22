package com.sonako.snk_api.common

import com.sonako.snk_api.model.ChapterInfo
import io.circe.{Decoder, Encoder}
import io.circe.generic.semiauto

object ImplicitDeEncoders {
	implicit val decoder: Decoder[ChapterInfo] = semiauto.deriveDecoder[ChapterInfo]
	implicit val encoder: Encoder[ChapterInfo] = semiauto.deriveEncoder[ChapterInfo]
}
