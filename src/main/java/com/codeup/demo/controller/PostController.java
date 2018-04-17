package com.codeup.demo.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class PostController {

    @GetMapping("/post")
    @ResponseBody
    public String index(){
        return "post index page";
    }
    @GetMapping("/post/{id}")
    @ResponseBody
    public String show(@PathVariable long id){
        return "post" + id;
    }

    @GetMapping("/post/create")
    @ResponseBody
    public String ShowCreateForm(){
        System.out.println("view form");
        return "view form";
    }

    @PostMapping("/post/create")
    @ResponseBody
    public String createPost(@RequestParam String name){
        System.out.println("submitted form");
        return "test is complete, " + name;
    }


}
