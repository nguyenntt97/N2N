package io.elpsychris.snk.snkdemo.components.chapters;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/chapters")
public class ChapterController {
    private ChapterService chapterService;

    @GetMapping(params = {"page", "size"})
    public void getAllChapter(@RequestParam(value = "page") int page,
                              @RequestParam(value = "size") int size,
                              long projectId) {
        chapterService.getAllChapter(page, size, projectId);
    }
}
