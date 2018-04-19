package com.codeup.demo.model;

import javax.persistence.*;

@Entity
@Table(name="people")
public class People {

    @Id
    @GeneratedValue @Column(columnDefinition = "int(11) UNSIGNED")
    private long id;

    @Column(nullable = false)
    private int age;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String reside_state;

    public People() {
    }

    public People(int age, String name, String reside_state) {
        this.age = age;
        this.name = name;
        this.reside_state = reside_state;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getReside_state() {
        return reside_state;
    }

    public void setReside_state(String reside_state) {
        this.reside_state = reside_state;
    }
}
