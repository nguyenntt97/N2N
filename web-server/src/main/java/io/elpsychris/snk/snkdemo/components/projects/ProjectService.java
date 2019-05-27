package io.elpsychris.snk.snkdemo.components.projects;

import io.elpsychris.snk.snkdemo.models.ProjectsEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepository projectRepo;


//    public ProjectService(IProjectRepo projectRepo) {
//        this.projectRepo = projectRepo;
//    }

    public Page<ProjectsEntity> findAllProject(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return projectRepo.findAll(pageable);
    }

    public void addNewProject(ProjectsEntity projectEntity) {
        projectRepo.save(projectEntity);
    }

    public void removeProject(long projectId) {
        projectRepo.deleteById(projectId);
    }

    public ProjectsEntity getProject(long projectId) {
        return projectRepo.getOne(projectId);
    }
}
