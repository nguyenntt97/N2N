package io.elpsychris.snk.snkdemo.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Objects;

@Entity
@Table(name = "genre_map", schema = "n2n_v1", catalog = "")
public class GenreMapEntity {
    private int genreMapId;

    @Id
    @Column(name = "genre_map_id", nullable = false)
    public int getGenreMapId() {
        return genreMapId;
    }

    public void setGenreMapId(int genreMapId) {
        this.genreMapId = genreMapId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        GenreMapEntity that = (GenreMapEntity) o;
        return genreMapId == that.genreMapId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(genreMapId);
    }
}
