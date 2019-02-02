package io.elpsychris.snk.snkdemo.components.projects;

import io.elpsychris.snk.snkdemo.models.ProjectEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepository projectRepo;


//    public ProjectService(IProjectRepo projectRepo) {
//        this.projectRepo = projectRepo;
//    }

    public List<ProjectEntity> findAllProject() {
        return projectRepo.findAll();
    }
}
