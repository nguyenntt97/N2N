package io.elpsychris.snk.snkdemo.models;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
@Table(name = "join_info", schema = "n2n_v1", catalog = "")
public class JoinInfoEntity {
    private int joinId;
    private Integer topicId;
    private Integer accId;
    private Timestamp lastUpdate;

    @Id
    @Column(name = "join_id", nullable = false)
    public int getJoinId() {
        return joinId;
    }

    public void setJoinId(int joinId) {
        this.joinId = joinId;
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
    @Column(name = "last_update", nullable = true)
    public Timestamp getLastUpdate() {
        return lastUpdate;
    }

    public void setLastUpdate(Timestamp lastUpdate) {
        this.lastUpdate = lastUpdate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        JoinInfoEntity that = (JoinInfoEntity) o;
        return joinId == that.joinId &&
                Objects.equals(topicId, that.topicId) &&
                Objects.equals(accId, that.accId) &&
                Objects.equals(lastUpdate, that.lastUpdate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(joinId, topicId, accId, lastUpdate);
    }
}
