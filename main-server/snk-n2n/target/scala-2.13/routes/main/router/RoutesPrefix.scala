// @GENERATOR:play-routes-compiler
// @SOURCE:/home/elpsychris/projects/nanno/main-server/snk-n2n/conf/routes
// @DATE:Sun Oct 27 20:17:18 ICT 2019


package router {
  object RoutesPrefix {
    private var _prefix: String = "/"
    def setPrefix(p: String): Unit = {
      _prefix = p
    }
    def prefix: String = _prefix
    val byNamePrefix: Function0[String] = { () => prefix }
  }
}
