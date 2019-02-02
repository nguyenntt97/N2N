package io.elpsychris.snk.snkdemo.models;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "genre", schema = "n2n_v1")
public class GenreEntity {
    private int genreId;
    private String genre;

    @Id
    @Column(name = "genre_id", nullable = false)
    public int getGenreId() {
        return genreId;
    }

    public void setGenreId(int genreId) {
        this.genreId = genreId;
    }

    @Basic
    @Column(name = "genre", nullable = true, length = 500)
    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        GenreEntity that = (GenreEntity) o;
        return genreId == that.genreId &&
                Objects.equals(genre, that.genre);
    }

    @Override
    public int hashCode() {
        return Objects.hash(genreId, genre);
    }
}
