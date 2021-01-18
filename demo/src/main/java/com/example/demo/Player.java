package com.example.demo;

import java.util.Date;

public class Player {
    String name;
    String password;
    Date date;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String p) {
        this.password = p;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date t) {
        this.date = t;
    }
}