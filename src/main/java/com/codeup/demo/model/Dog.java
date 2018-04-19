package com.codeup.demo.model;

import javax.persistence.*;

@Entity
@Table(name="dog")
public class Dog {

    @Id @GeneratedValue
    private int id;

    @Column(nullable = false)
    private int age;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String state_residing;


    public Dog() {
    }

    public Dog(int age, String name, String state_residing) {
        this.age = age;
        this.name = name;
        this.state_residing = state_residing;
    }

    public long getId() {
        return id;
    }

    public void setId(int id) {
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

    public String getState_residing() {
        return state_residing;
    }

    public void setState_residing(String state_residing) {
        this.state_residing = state_residing;
    }
}
