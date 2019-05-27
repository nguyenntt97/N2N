package io.elpsychris.snk.snkdemo.models;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "genre_map", schema = "n2n_v1", catalog = "")
public class GenreMapEntity {
    private int genreMapId;
    private Integer genreId;
    private Integer projectId;

    @Id
    @Column(name = "genre_map_id", nullable = false)
    public int getGenreMapId() {
        return genreMapId;
    }

    public void setGenreMapId(int genreMapId) {
        this.genreMapId = genreMapId;
    }

    @Basic
    @Column(name = "genre_id", nullable = true)
    public Integer getGenreId() {
        return genreId;
    }

    public void setGenreId(Integer genreId) {
        this.genreId = genreId;
    }

    @Basic
    @Column(name = "project_id", nullable = true)
    public Integer getProjectId() {
        return projectId;
    }

    public void setProjectId(Integer projectId) {
        this.projectId = projectId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        GenreMapEntity that = (GenreMapEntity) o;
        return genreMapId == that.genreMapId &&
                Objects.equals(genreId, that.genreId) &&
                Objects.equals(projectId, that.projectId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(genreMapId, genreId, projectId);
    }
}
