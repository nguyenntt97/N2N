package io.elpsychris.snk.snkdemo.components.chapters;

import io.elpsychris.snk.snkdemo.models.ChaptersEntity;
import io.elpsychris.snk.snkdemo.models.ProjectEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ChapterService {
    private ChapterRepository chapterRepository;

    public ChapterService(ChapterRepository chapterRepository) {
        this.chapterRepository = chapterRepository;
    }

    public Page<ChaptersEntity> getAllChapter(int page, int size, int projectId) {
        Pageable pageable = PageRequest.of(page, size);

        ProjectEntity projectEntity = new ProjectEntity();
        projectEntity.setProjectId(projectId);

        return chapterRepository.findChapters(projectId, pageable);
    }

    public ChaptersEntity addNewChapter(ChaptersEntity chaptersEntity) {
        return chapterRepository.save(chaptersEntity);
    }
}
