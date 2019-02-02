package io.elpsychris.snk.snkdemo.models;

import javax.persistence.*;
import java.sql.Date;
import java.util.Objects;

@Entity
@Table(name = "chapters", schema = "n2n_v1", catalog = "")
public class ChaptersEntity {
    private int chapId;
    private Integer projectId;
    private Date updateDate;
    private Integer author;
    private Integer views;
    private Double rating;
    private String chapContent;

    @Id
    @Column(name = "chap_id", nullable = false)
    public int getChapId() {
        return chapId;
    }

    public void setChapId(int chapId) {
        this.chapId = chapId;
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
    @Column(name = "update_date", nullable = true)
    public Date getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(Date updateDate) {
        this.updateDate = updateDate;
    }

    @Basic
    @Column(name = "author", nullable = true)
    public Integer getAuthor() {
        return author;
    }

    public void setAuthor(Integer author) {
        this.author = author;
    }

    @Basic
    @Column(name = "views", nullable = true)
    public Integer getViews() {
        return views;
    }

    public void setViews(Integer views) {
        this.views = views;
    }

    @Basic
    @Column(name = "rating", nullable = true, precision = 0)
    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }

    @Basic
    @Column(name = "chap_content", nullable = true, length = -1)
    public String getChapContent() {
        return chapContent;
    }

    public void setChapContent(String chapContent) {
        this.chapContent = chapContent;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ChaptersEntity that = (ChaptersEntity) o;
        return chapId == that.chapId &&
                Objects.equals(projectId, that.projectId) &&
                Objects.equals(updateDate, that.updateDate) &&
                Objects.equals(author, that.author) &&
                Objects.equals(views, that.views) &&
                Objects.equals(rating, that.rating) &&
                Objects.equals(chapContent, that.chapContent);
    }

    @Override
    public int hashCode() {
        return Objects.hash(chapId, projectId, updateDate, author, views, rating, chapContent);
    }
}
