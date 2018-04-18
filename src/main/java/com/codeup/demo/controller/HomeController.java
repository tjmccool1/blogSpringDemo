package com.codeup.demo.controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

@Controller
public class HomeController {

    @GetMapping("/home")
//    @ResponseBody
    public String Welcome(){
        return "home";
    }

    @GetMapping("/home/{name}")
    public String WelcomeUser(@PathVariable String name, Model model){
        return "home";
    }

    @GetMapping("/home/users")
    public String WelcomeUsers(@PathVariable String name, Model model){
        List <String> users = new ArrayList<>();

        users.add("TJ");
        users.add("Joe");
        users.add("Jane");

        model.addAttribute("users", name);
        return "home";
    }

}
