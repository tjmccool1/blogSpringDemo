package com.codeup.demo.model;

import org.hibernate.validator.constraints.NotBlank;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Entity
@Table(name="posts")
public class Post {


    @Id
    @GeneratedValue
    @Column(columnDefinition = "int(11) UNSIGNED")
    private long id;

    @Column(nullable = false)
    @NotBlank(message = "Post must have a title.")
//    @Size(min = 3, message = "The Title must be at least 3 characters.")
    private String title;

    @Column(nullable = false)
    @Lob
    @NotBlank(message = "Post must have some Text.")
    private String body;

//    create relationship to users table
    @OneToOne
    private User user;



    public Post(long id, String title, String body,User user) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.user = user;
    }

    public Post(String title, String body, User user) {
        this.title = title;
        this.body = body;
        this.user = user;
    }

    public Post(String title, String body) {
        this.title = title;
        this.body = body;
    }

    public Post(){

    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }
}
