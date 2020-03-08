package com.sonako.snk_api.service

import cats.effect._
import com.sonako.snk_api.model.{Project, ProjectInfo}
import com.sonako.snk_api.repository.ProjectRepo
import io.finch._

object ProjectService extends Endpoint.Module[IO] {
    
    final val getProjects: Endpoint[IO, List[Project]] = get("projects") {
        Ok(ProjectRepo.getAllProjects())
    }
    
    final val getProject: Endpoint[IO, ProjectInfo] = get("project" :: param[Long]("id")) { id: Long =>
        ProjectRepo.getProjectInfo(id) match {
            case Some(pInfo) => Ok(pInfo)
            case None => NoContent
        }
    }
    
    def api = getProjects :+: getProject
}
