package io.elpsychris.snk.snkdemo.models;

import com.vladmihalcea.hibernate.type.json.JsonStringType;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;

import javax.persistence.*;
import java.sql.Date;
import java.util.Objects;

@Entity
@TypeDef(name = "json", typeClass = JsonStringType.class)
@Table(name = "chapters", schema = "n2n_v1")
public class ChaptersEntity {
    private int chapId;
    private int volumeId;
    private Date updateDate;
    private int uploader;
    private int views;
    private double rating;
    private String chapContent;
    private Object history;

    @Id
    @Column(name = "chap_id", nullable = false)
    public int getChapId() {
        return chapId;
    }

    public void setChapId(int chapId) {
        this.chapId = chapId;
    }

    @Basic
    @Column(name = "volume_id", nullable = false)
    public int getVolumeId() {
        return volumeId;
    }

    public void setVolumeId(int volumeId) {
        this.volumeId = volumeId;
    }

    @Basic
    @Column(name = "update_date", nullable = false)
    public Date getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(Date updateDate) {
        this.updateDate = updateDate;
    }

    @Basic
    @Column(name = "uploader", nullable = false)
    public int getUploader() {
        return uploader;
    }

    public void setUploader(int uploader) {
        this.uploader = uploader;
    }

    @Basic
    @Column(name = "views", nullable = false)
    public int getViews() {
        return views;
    }

    public void setViews(int views) {
        this.views = views;
    }

    @Basic
    @Column(name = "rating", nullable = false, precision = 0)
    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    @Basic
    @Column(name = "chap_content", nullable = false, length = -1)
    public String getChapContent() {
        return chapContent;
    }

    public void setChapContent(String chapContent) {
        this.chapContent = chapContent;
    }

    @Type( type = "json" )
    @Column(name = "history", nullable = true, columnDefinition = "json")
    public Object getHistory() {
        return history;
    }

    public void setHistory(Object history) {
        this.history = history;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ChaptersEntity that = (ChaptersEntity) o;
        return chapId == that.chapId &&
                volumeId == that.volumeId &&
                uploader == that.uploader &&
                views == that.views &&
                Double.compare(that.rating, rating) == 0 &&
                Objects.equals(updateDate, that.updateDate) &&
                Objects.equals(chapContent, that.chapContent) &&
                Objects.equals(history, that.history);
    }

    @Override
    public int hashCode() {
        return Objects.hash(chapId, volumeId, updateDate, uploader, views, rating, chapContent, history);
    }
}
