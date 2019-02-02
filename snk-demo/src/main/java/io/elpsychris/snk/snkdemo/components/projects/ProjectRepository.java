package io.elpsychris.snk.snkdemo.components.projects;

import io.elpsychris.snk.snkdemo.models.ProjectEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends JpaRepository<ProjectEntity, Long> {

}
