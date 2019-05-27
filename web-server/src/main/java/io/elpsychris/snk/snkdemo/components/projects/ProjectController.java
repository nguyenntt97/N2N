package io.elpsychris.snk.snkdemo.components.projects;

import io.elpsychris.snk.snkdemo.models.ProjectsEntity;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/projects")
public class ProjectController {

//    @Autowired
    private ProjectService projectService;

    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping(params = {"page", "size"})
    public Page<ProjectsEntity> getAllProjects(@RequestParam(value = "page") int page,
                                               @RequestParam(value = "size") int size) {
        return projectService.findAllProject(page, size);
    }

    @PostMapping("")
    public void addNewProject(ProjectsEntity projectEntity) {
        projectService.addNewProject(projectEntity);
    }

    @DeleteMapping("")
    public void removeProject(long projectId) {
        projectService.removeProject(projectId);
    }
}
