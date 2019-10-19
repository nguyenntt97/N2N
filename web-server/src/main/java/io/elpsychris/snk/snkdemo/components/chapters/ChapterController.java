package io.elpsychris.snk.snkdemo.components.chapters;

import io.elpsychris.snk.snkdemo.models.ChaptersEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/chapters")
public class ChapterController {
    private ChapterService chapterService;

    @Autowired
    public ChapterController(ChapterService chapterService) {
        this.chapterService = chapterService;
    }

    @CrossOrigin
    @GetMapping(value = "/{project-id}", params = {"page", "size"})
    public Page<ChaptersEntity> getAllChapter(@RequestParam(value = "page") int page,
                                              @RequestParam(value = "size") int size,
                                              @PathVariable("project-id") int projectId) {
        return chapterService.getAllChapter(page, size, projectId);
    }

    @CrossOrigin
    @PostMapping()
    public ChaptersEntity addNewChapter(@RequestBody ChaptersEntity chaptersEntity) {
        return chapterService.addNewChapter(chaptersEntity);
    }
}
