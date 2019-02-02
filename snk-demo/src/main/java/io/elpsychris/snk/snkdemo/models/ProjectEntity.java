package io.elpsychris.snk.snkdemo.models;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
@Table(name = "project", schema = "n2n_v1")
public class ProjectEntity {
    private int projectId;
    private String projectName;
    private String projectNameAlter;
    private Integer projectCreated;
    private Timestamp projectLatest;
    private String projectAuthor;
    private String projectArtist;
    private String projectSynopsis;
    private String projectTags;
    private String projectAva;
    private String projectLink;
    private Object projectUpdateInfo;

    @Id
    @Column(name = "project_id", nullable = false)
    public int getProjectId() {
        return projectId;
    }

    public void setProjectId(int projectId) {
        this.projectId = projectId;
    }

    @Basic
    @Column(name = "project_name", nullable = true, length = 200)
    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    @Basic
    @Column(name = "project_name_alter", nullable = true, length = -1)
    public String getProjectNameAlter() {
        return projectNameAlter;
    }

    public void setProjectNameAlter(String projectNameAlter) {
        this.projectNameAlter = projectNameAlter;
    }

    @Basic
    @Column(name = "project_created", nullable = true)
    public Integer getProjectCreated() {
        return projectCreated;
    }

    public void setProjectCreated(Integer projectCreated) {
        this.projectCreated = projectCreated;
    }

    @Basic
    @Column(name = "project_latest", nullable = true)
    public Timestamp getProjectLatest() {
        return projectLatest;
    }

    public void setProjectLatest(Timestamp projectLatest) {
        this.projectLatest = projectLatest;
    }

    @Basic
    @Column(name = "project_author", nullable = true, length = 45)
    public String getProjectAuthor() {
        return projectAuthor;
    }

    public void setProjectAuthor(String projectAuthor) {
        this.projectAuthor = projectAuthor;
    }

    @Basic
    @Column(name = "project_artist", nullable = true, length = 45)
    public String getProjectArtist() {
        return projectArtist;
    }

    public void setProjectArtist(String projectArtist) {
        this.projectArtist = projectArtist;
    }

    @Basic
    @Column(name = "project_synopsis", nullable = true, length = -1)
    public String getProjectSynopsis() {
        return projectSynopsis;
    }

    public void setProjectSynopsis(String projectSynopsis) {
        this.projectSynopsis = projectSynopsis;
    }

    @Basic
    @Column(name = "project_tags", nullable = true, length = 250)
    public String getProjectTags() {
        return projectTags;
    }

    public void setProjectTags(String projectTags) {
        this.projectTags = projectTags;
    }

    @Basic
    @Column(name = "project_ava", nullable = true, length = 250)
    public String getProjectAva() {
        return projectAva;
    }

    public void setProjectAva(String projectAva) {
        this.projectAva = projectAva;
    }

    @Basic
    @Column(name = "project_link", nullable = true, length = 200)
    public String getProjectLink() {
        return projectLink;
    }

    public void setProjectLink(String projectLink) {
        this.projectLink = projectLink;
    }

    @Basic
    @Column(name = "project_update_info", nullable = true)
    public Object getProjectUpdateInfo() {
        return projectUpdateInfo;
    }

    public void setProjectUpdateInfo(Object projectUpdateInfo) {
        this.projectUpdateInfo = projectUpdateInfo;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ProjectEntity that = (ProjectEntity) o;
        return projectId == that.projectId &&
                Objects.equals(projectName, that.projectName) &&
                Objects.equals(projectNameAlter, that.projectNameAlter) &&
                Objects.equals(projectCreated, that.projectCreated) &&
                Objects.equals(projectLatest, that.projectLatest) &&
                Objects.equals(projectAuthor, that.projectAuthor) &&
                Objects.equals(projectArtist, that.projectArtist) &&
                Objects.equals(projectSynopsis, that.projectSynopsis) &&
                Objects.equals(projectTags, that.projectTags) &&
                Objects.equals(projectAva, that.projectAva) &&
                Objects.equals(projectLink, that.projectLink) &&
                Objects.equals(projectUpdateInfo, that.projectUpdateInfo);
    }

    @Override
    public int hashCode() {
        return Objects.hash(projectId, projectName, projectNameAlter, projectCreated, projectLatest, projectAuthor, projectArtist, projectSynopsis, projectTags, projectAva, projectLink, projectUpdateInfo);
    }
}
