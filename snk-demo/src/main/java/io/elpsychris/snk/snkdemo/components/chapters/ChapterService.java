package io.elpsychris.snk.snkdemo.components.chapters;

import io.elpsychris.snk.snkdemo.models.ChaptersEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Service
public class ChapterService {
    private ChapterRepository chapterRepository;

    public Page<ChaptersEntity> getAllChapter(int page, int size, long projectId) {
        Pageable pageable = PageRequest.of(page, size);

        return chapterRepository.findChaptersEntitiesByProject(projectId, pageable);
    }
}
