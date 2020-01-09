package com.sonako.snk_api.common

import com.sonako.snk_api.model.Chapter
import io.circe.{Decoder, Encoder}
import io.circe.generic.semiauto

object ImplicitDeEncoders {
	implicit val decoder: Decoder[Chapter] = semiauto.deriveDecoder[Chapter]
	implicit val encoder: Encoder[Chapter] = semiauto.deriveEncoder[Chapter]
}
