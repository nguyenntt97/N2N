package io.elpsychris.snk.snkdemo.models;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
@Table(name = "topics", schema = "n2n_v1", catalog = "")
public class TopicsEntity {
    private int topicId;
    private String topicName;
    private Integer memNum;
    private Timestamp lastUpdate;
    private Boolean isOpen;
    private String extLink;
    private Integer creator;

    @Id
    @Column(name = "topic_id", nullable = false)
    public int getTopicId() {
        return topicId;
    }

    public void setTopicId(int topicId) {
        this.topicId = topicId;
    }

    @Basic
    @Column(name = "topic_name", nullable = true, length = 100)
    public String getTopicName() {
        return topicName;
    }

    public void setTopicName(String topicName) {
        this.topicName = topicName;
    }

    @Basic
    @Column(name = "mem_num", nullable = true)
    public Integer getMemNum() {
        return memNum;
    }

    public void setMemNum(Integer memNum) {
        this.memNum = memNum;
    }

    @Basic
    @Column(name = "last_update", nullable = true)
    public Timestamp getLastUpdate() {
        return lastUpdate;
    }

    public void setLastUpdate(Timestamp lastUpdate) {
        this.lastUpdate = lastUpdate;
    }

    @Basic
    @Column(name = "is_open", nullable = true)
    public Boolean getOpen() {
        return isOpen;
    }

    public void setOpen(Boolean open) {
        isOpen = open;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TopicsEntity that = (TopicsEntity) o;
        return topicId == that.topicId &&
                Objects.equals(topicName, that.topicName) &&
                Objects.equals(memNum, that.memNum) &&
                Objects.equals(lastUpdate, that.lastUpdate) &&
                Objects.equals(isOpen, that.isOpen);
    }

    @Override
    public int hashCode() {
        return Objects.hash(topicId, topicName, memNum, lastUpdate, isOpen);
    }

    @Basic
    @Column(name = "ext_link", nullable = true, length = 500)
    public String getExtLink() {
        return extLink;
    }

    public void setExtLink(String extLink) {
        this.extLink = extLink;
    }

    @Basic
    @Column(name = "creator", nullable = true)
    public Integer getCreator() {
        return creator;
    }

    public void setCreator(Integer creator) {
        this.creator = creator;
    }
}
