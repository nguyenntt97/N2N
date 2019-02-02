package io.elpsychris.snk.snkdemo.models;

import io.elpsychris.snk.snkdemo.com.util.JpaConverterJson;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "accounts", schema = "n2n_v1")
public class AccountsEntity {
    private int userId;
    private String userName;
    private String userPass;
    private Integer userRole;
    private Object userProfile;

    @Id
    @Column(name = "user_id", nullable = false)
    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    @Basic
    @Column(name = "user_name", nullable = true, length = 45)
    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    @Basic
    @Column(name = "user_pass", nullable = true, length = 50)
    public String getUserPass() {
        return userPass;
    }

    public void setUserPass(String userPass) {
        this.userPass = userPass;
    }

    @Basic
    @Column(name = "user_role", nullable = true)
    public Integer getUserRole() {
        return userRole;
    }

    public void setUserRole(Integer userRole) {
        this.userRole = userRole;
    }

    @Basic
    @Column(name = "user_profile", nullable = true)
    public Object getUserProfile() {
        return userProfile;
    }

    @Convert(converter = JpaConverterJson.class)
    public void setUserProfile(Object userProfile) {
        this.userProfile = userProfile;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AccountsEntity that = (AccountsEntity) o;
        return userId == that.userId &&
                Objects.equals(userName, that.userName) &&
                Objects.equals(userPass, that.userPass) &&
                Objects.equals(userRole, that.userRole) &&
                Objects.equals(userProfile, that.userProfile);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId, userName, userPass, userRole, userProfile);
    }
}
