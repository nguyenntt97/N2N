package io.elpsychris.snk.snkdemo.models;

import com.vladmihalcea.hibernate.type.json.JsonStringType;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
@TypeDef(name = "json", typeClass = JsonStringType.class)
@Table(name = "accounts", schema = "n2n_v1")
public class AccountsEntity {
    private int accId;
    private String accName;
    private String accPass;
    private Integer accRole;
    private Object accProfile;
    private Timestamp createdDate;
    private String displayName;

    @Id
    @Column(name = "acc_id", nullable = false)
    public int getAccId() {
        return accId;
    }

    public void setAccId(int accId) {
        this.accId = accId;
    }

    @Basic
    @Column(name = "acc_name", nullable = false, length = 20)
    public String getAccName() {
        return accName;
    }

    public void setAccName(String accName) {
        this.accName = accName;
    }

    @Basic
    @Column(name = "acc_pass", nullable = false, length = 50)
    public String getAccPass() {
        return accPass;
    }

    public void setAccPass(String accPass) {
        this.accPass = accPass;
    }

    @Basic
    @Column(name = "acc_role", nullable = true)
    public Integer getAccRole() {
        return accRole;
    }

    public void setAccRole(Integer accRole) {
        this.accRole = accRole;
    }

    @Type( type = "json" )
    @Column(name = "acc_profile", nullable = true, columnDefinition = "json")
    public Object getAccProfile() {
        return accProfile;
    }

    public void setAccProfile(Object accProfile) {
        this.accProfile = accProfile;
    }

    @Basic
    @Column(name = "created_date", nullable = true)
    public Timestamp getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Timestamp createdDate) {
        this.createdDate = createdDate;
    }

    @Basic
    @Column(name = "display_name", nullable = true, length = 100)
    public String getDisplayName() {
        return displayName;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AccountsEntity that = (AccountsEntity) o;
        return accId == that.accId &&
                Objects.equals(accName, that.accName) &&
                Objects.equals(accPass, that.accPass) &&
                Objects.equals(accRole, that.accRole) &&
                Objects.equals(accProfile, that.accProfile) &&
                Objects.equals(createdDate, that.createdDate) &&
                Objects.equals(displayName, that.displayName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(accId, accName, accPass, accRole, accProfile, createdDate, displayName);
    }
}
