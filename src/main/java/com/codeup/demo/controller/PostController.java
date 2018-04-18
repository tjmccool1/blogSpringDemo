package com.codeup.demo.controller;


import com.codeup.demo.model.Post;
import com.codeup.demo.services.PostService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
public class PostController {



    //injecting service
    PostService postService;


    public PostController(PostService postSvc) {
        this.postService = postSvc;
    }


    @GetMapping("/posts")

    public String index(Model model){

//        List<Post> posts = new ArrayList<>();
//
//        posts.add(new Post("This is title 1", "This is the 1st body"));
//        posts.add(new Post("This is title 2", "This is the 2nd body"));
//        posts.add(new Post("This is title 3", "This is the 3rd body"));
//        posts.add(new Post("This is title 4", "This is the 4th body"));
//
       model.addAttribute("posts", postService.getAllPosts());

        return "posts/index";
    }

    @GetMapping("/post/{id}")

    public String show(@PathVariable long id, Model model){
        Post post = new Post("Test post", "Test body description");

        model.addAttribute("post", post);
        return "post/show";
    }

    @GetMapping("/post/create")

    public String ShowCreateForm(){
        System.out.println("view form");
        return "view form";
    }

    @PostMapping("/post/create")

    public String createPost(@RequestParam String name){
        System.out.println("submitted form");
        return "test is complete, " + name;
    }


}
