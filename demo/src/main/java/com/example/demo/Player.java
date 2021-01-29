package com.example.demo;

import java.util.Date;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;


public class Player {
    String name;
    String password;
    Date date;

    Player(){};

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

    public void createDataBase()
    {
        new File("Players.txt");
    }

    public void savePlayer(String name, String password)
    {
        name = getName();
        password = getPassword();
        try(FileWriter fw = new FileWriter("Players.txt", true);
            BufferedWriter bw = new BufferedWriter(fw);
            PrintWriter out = new PrintWriter(bw))
            {
                out.println(name + "\n" + password); 
            } 
            catch (IOException e) 
            {
                System.out.println("File not found: " + e.getMessage());
            }
           
    }

    
}