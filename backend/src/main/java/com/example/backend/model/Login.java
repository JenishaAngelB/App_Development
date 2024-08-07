package com.example.backend.model;

import jakarta.persistence.*;

@Entity
public class Login {

    @Id
    private Long id;

    @Column(name = "email", unique = true)
    private String email;

    @Column(name = "pwd")
    private String password;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    // Default constructor
    public Login() {}

    // Parameterized constructor
    public Login(Long id, String email, String password) {
        this.id = id;
        this.email = email;
        this.password = password;
    }
}
