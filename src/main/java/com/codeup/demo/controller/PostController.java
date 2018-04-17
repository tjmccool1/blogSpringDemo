package com.codeup.demo.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class PostController {

    @GetMapping("/post")
    public String index(){
        return "post index page";
    }
    @GetMapping("/post/{id}")
    public String show(@PathVariable long id){
        return "post";
    }

    @GetMapping("/post/create")
    @ResponseBody
    public String ShowCreateForm(){
        System.out.println("view form");
        return "";
    }

    @PostMapping("/post/create")
    @ResponseBody
    public String createPost(@RequestParam String name){
        System.out.println("submitted form");
        return "test is complete, " + name;
    }


}
