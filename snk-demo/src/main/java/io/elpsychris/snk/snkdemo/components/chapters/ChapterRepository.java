package io.elpsychris.snk.snkdemo.components.chapters;

import io.elpsychris.snk.snkdemo.models.ChaptersEntity;
import io.elpsychris.snk.snkdemo.models.ProjectEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChapterRepository extends JpaRepository<ChaptersEntity, Long>, PagingAndSortingRepository<ChaptersEntity, Long> {

    List<ChaptersEntity> findChaptersEntitiesByProject(ProjectEntity projectEntity);
}
