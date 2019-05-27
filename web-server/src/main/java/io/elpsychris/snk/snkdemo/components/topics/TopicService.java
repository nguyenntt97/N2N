package io.elpsychris.snk.snkdemo.components.topics;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TopicService {
    private TopicRepository topicRepository;

    public TopicService(TopicRepository topicRepository) {
        this.topicRepository = topicRepository;
    }

    public List getAllTopics() {
        return topicRepository.findAll();
    }
}
