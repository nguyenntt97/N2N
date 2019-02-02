package io.elpsychris.snk.snkdemo.components.chapters;

import io.elpsychris.snk.snkdemo.models.ChaptersEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/chapters")
public class ChapterController {
    private ChapterService chapterService;

    @Autowired
    public ChapterController(ChapterService chapterService) {
        this.chapterService = chapterService;
    }

    @GetMapping(value = "/{project-id}", params = {"page", "size"})
    public List<ChaptersEntity> getAllChapter(@RequestParam(value = "page") int page,
                                              @RequestParam(value = "size") int size,
                                              @PathVariable("project-id") int projectId) {
        return chapterService.getAllChapter(page, size, projectId);
    }
}
