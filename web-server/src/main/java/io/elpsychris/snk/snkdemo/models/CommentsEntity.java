package io.elpsychris.snk.snkdemo.models;

import com.vladmihalcea.hibernate.type.json.JsonStringType;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;

import javax.persistence.*;
import java.util.Objects;

@Entity
@TypeDef(name = "json", typeClass = JsonStringType.class)
@Table(name = "comments", schema = "n2n_v1")
public class CommentsEntity {
    private int comId;
    private Integer topicId;
    private Integer accId;
    private String content;
    private Object react;

    @Id
    @Column(name = "com_id", nullable = false)
    public int getComId() {
        return comId;
    }

    public void setComId(int comId) {
        this.comId = comId;
    }

    @Basic
    @Column(name = "topic_id", nullable = true)
    public Integer getTopicId() {
        return topicId;
    }

    public void setTopicId(Integer topicId) {
        this.topicId = topicId;
    }

    @Basic
    @Column(name = "acc_id", nullable = true)
    public Integer getAccId() {
        return accId;
    }

    public void setAccId(Integer accId) {
        this.accId = accId;
    }

    @Basic
    @Column(name = "content", nullable = true, length = 200)
    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    @Type( type = "json" )
    @Column(name = "react", nullable = true, columnDefinition = "json")
    public Object getReact() {
        return react;
    }

    public void setReact(Object react) {
        this.react = react;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CommentsEntity that = (CommentsEntity) o;
        return comId == that.comId &&
                Objects.equals(topicId, that.topicId) &&
                Objects.equals(accId, that.accId) &&
                Objects.equals(content, that.content) &&
                Objects.equals(react, that.react);
    }

    @Override
    public int hashCode() {
        return Objects.hash(comId, topicId, accId, content, react);
    }
}
