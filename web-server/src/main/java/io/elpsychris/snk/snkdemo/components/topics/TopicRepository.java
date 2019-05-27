package io.elpsychris.snk.snkdemo.components.topics;

import io.elpsychris.snk.snkdemo.models.ProjectsEntity;
import io.elpsychris.snk.snkdemo.models.TopicsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.awt.print.Pageable;

@Repository
interface TopicRepository extends JpaRepository<TopicsEntity, Long> {
}
