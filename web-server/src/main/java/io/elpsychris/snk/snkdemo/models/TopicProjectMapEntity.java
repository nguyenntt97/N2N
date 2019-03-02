package io.elpsychris.snk.snkdemo.models;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "topic_project_map", schema = "n2n_v1", catalog = "")
public class TopicProjectMapEntity {
    private int mapId;
    private Integer projectId;
    private Integer topicId;

    @Id
    @Column(name = "map_id", nullable = false)
    public int getMapId() {
        return mapId;
    }

    public void setMapId(int mapId) {
        this.mapId = mapId;
    }

    @Basic
    @Column(name = "project_id", nullable = true)
    public Integer getProjectId() {
        return projectId;
    }

    public void setProjectId(Integer projectId) {
        this.projectId = projectId;
    }

    @Basic
    @Column(name = "topic_id", nullable = true)
    public Integer getTopicId() {
        return topicId;
    }

    public void setTopicId(Integer topicId) {
        this.topicId = topicId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TopicProjectMapEntity that = (TopicProjectMapEntity) o;
        return mapId == that.mapId &&
                Objects.equals(projectId, that.projectId) &&
                Objects.equals(topicId, that.topicId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(mapId, projectId, topicId);
    }
}
