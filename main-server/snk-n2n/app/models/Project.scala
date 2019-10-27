package models


case class Project(project_id: Int,
                   project_name: String,
                   project_author: String,
                   project_synopsis: String)

object Projects {
  var projects: Seq[Project] = Seq()

  def add(project: Project): Unit = {
    projects = projects :+ project.copy(project_id = projects.length)
  }

  def listAll: Seq[Project] =  projects
}