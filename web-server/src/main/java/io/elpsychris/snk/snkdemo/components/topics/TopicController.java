package io.elpsychris.snk.snkdemo.components.topics;

import io.elpsychris.snk.snkdemo.models.TopicsEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/topics")
public class TopicController {
    private TopicService topicService;

    public TopicController(TopicService topicService) {
        this.topicService = topicService;
    }

    @CrossOrigin
    @GetMapping()
    public List<TopicsEntity> getAllTopics() {
        return topicService.getAllTopics();
    }
}
