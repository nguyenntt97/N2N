package io.elpsychris.snk.snkdemo.models;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "edit_permission", schema = "n2n_v1", catalog = "")
public class EditPermissionEntity {
    private int permisId;
    private Integer accId;
    private Integer chapId;
    private Integer permisLevel;

    @Id
    @Column(name = "permis_id", nullable = false)
    public int getPermisId() {
        return permisId;
    }

    public void setPermisId(int permisId) {
        this.permisId = permisId;
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
    @Column(name = "chap_id", nullable = true)
    public Integer getChapId() {
        return chapId;
    }

    public void setChapId(Integer chapId) {
        this.chapId = chapId;
    }

    @Basic
    @Column(name = "permis_level", nullable = true)
    public Integer getPermisLevel() {
        return permisLevel;
    }

    public void setPermisLevel(Integer permisLevel) {
        this.permisLevel = permisLevel;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        EditPermissionEntity that = (EditPermissionEntity) o;
        return permisId == that.permisId &&
                Objects.equals(accId, that.accId) &&
                Objects.equals(chapId, that.chapId) &&
                Objects.equals(permisLevel, that.permisLevel);
    }

    @Override
    public int hashCode() {
        return Objects.hash(permisId, accId, chapId, permisLevel);
    }
}
