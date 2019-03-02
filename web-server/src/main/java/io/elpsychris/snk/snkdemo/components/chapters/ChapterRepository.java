package io.elpsychris.snk.snkdemo.components.chapters;

import io.elpsychris.snk.snkdemo.models.ChaptersEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ChapterRepository extends JpaRepository<ChaptersEntity, Long>, PagingAndSortingRepository<ChaptersEntity, Long> {

    @Query(value = "SELECT * FROM chapters c WHERE c.project_id = :project_id", nativeQuery = true)
    Page<ChaptersEntity> findChapters(@Param("project_id") int projectId,
                                      Pageable pageable);
}
