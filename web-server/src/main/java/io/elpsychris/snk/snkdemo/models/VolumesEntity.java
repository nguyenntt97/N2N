package io.elpsychris.snk.snkdemo.models;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "volumes", schema = "n2n_v1", catalog = "")
public class VolumesEntity {
    private int volId;
    private Integer projectId;
    private String volTitle;
    private String volSynopsis;
    private Integer volViews;
    private String volCover;

    @Id
    @Column(name = "vol_id", nullable = false)
    public int getVolId() {
        return volId;
    }

    public void setVolId(int volId) {
        this.volId = volId;
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
    @Column(name = "vol_title", nullable = true, length = 500)
    public String getVolTitle() {
        return volTitle;
    }

    public void setVolTitle(String volTitle) {
        this.volTitle = volTitle;
    }

    @Basic
    @Column(name = "vol_synopsis", nullable = true, length = -1)
    public String getVolSynopsis() {
        return volSynopsis;
    }

    public void setVolSynopsis(String volSynopsis) {
        this.volSynopsis = volSynopsis;
    }

    @Basic
    @Column(name = "vol_views", nullable = true)
    public Integer getVolViews() {
        return volViews;
    }

    public void setVolViews(Integer volViews) {
        this.volViews = volViews;
    }

    @Basic
    @Column(name = "vol_cover", nullable = true, length = 500)
    public String getVolCover() {
        return volCover;
    }

    public void setVolCover(String volCover) {
        this.volCover = volCover;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        VolumesEntity that = (VolumesEntity) o;
        return volId == that.volId &&
                Objects.equals(projectId, that.projectId) &&
                Objects.equals(volTitle, that.volTitle) &&
                Objects.equals(volSynopsis, that.volSynopsis) &&
                Objects.equals(volViews, that.volViews) &&
                Objects.equals(volCover, that.volCover);
    }

    @Override
    public int hashCode() {
        return Objects.hash(volId, projectId, volTitle, volSynopsis, volViews, volCover);
    }
}
