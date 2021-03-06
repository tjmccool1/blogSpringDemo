package com.codeup.demo.controller;


import com.codeup.demo.Repository.PostRepository;
import com.codeup.demo.Repository.UserRepository;
import com.codeup.demo.model.Post;
import com.codeup.demo.model.User;
import com.codeup.demo.services.PostService;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@Controller
public class PostController {




    //injecting service
    private PostService postService;
    private PostRepository postDao;
    private UserRepository userDao;


    public PostController(PostService postService, PostRepository postDao, UserRepository userDao
    ) {
        this.postService = postService;
        this.postDao = postDao;
        this.userDao = userDao;

    }

//    @GetMapping("/home")
//    public String lastPost(Model model){
//        model.addAttribute("posts", postDao.
//        return "/home";
//    }

    @GetMapping("/posts")
    public String index(Model model){

//        List<Post> posts = new ArrayList<>();
//
//        posts.add(new Post("This is title 1", "This is the 1st body"));
//        posts.add(new Post("This is title 2", "This is the 2nd body"));
//        posts.add(new Post("This is title 3", "This is the 3rd body"));
//        posts.add(new Post("This is title 4", "This is the 4th body"));

       model.addAttribute("posts", postService.getAllPosts());

        return "/posts/index";
    }

    @GetMapping("/posts/{id}")
    public String show(@PathVariable long id, Model model){
//        Post post = new Post("Test post", "Test body description");
        model.addAttribute("post", postService.getPost(id));
        return "/posts/show";
    }

    @GetMapping("/posts/create")
//    @ResponseBody
    public String ShowCreateForm(Model viewModel){
        viewModel.addAttribute("post", new Post());
        return "/posts/create";
    }

//    @PostMapping("/posts/create")
////    public String createPost(@ModelAttribute Post post){
//    public String createPost(@Valid Post post, Errors validation, Model model){
//        if(validation.hasErrors()){
//            model.addAttribute("errors", validation);
//            model.addAttribute("post",post);
//            return "/posts/create";
//        }
//        User loggedInUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
//        post.setUser(loggedInUser);
//        postService.save(post);
//        return "redirect: ";
//    }

    @PostMapping("/posts/create")
    public String createPost(@Valid Post post, Errors errors, Model model) {
        if (errors.hasErrors()) {
            model.addAttribute(errors);
            model.addAttribute(post);
            return "/posts/create";
        }

        User loggedInUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        post.setUser(loggedInUser);

        postDao.save(post);
        return "redirect:/posts";
    }


    @GetMapping("/posts/{id}/edit")
    public String updatePost(@PathVariable long id, Model viewModel) {
       viewModel.addAttribute("post", postService.getPost(id));
        return "/posts/edit";
    }


    @PostMapping("/posts/{id}/edit")
//    @ResponseBody
    public String updatePost(@PathVariable long id, @ModelAttribute Post post) {
        post.setId(id);
        postService.save(post);
        return "redirect:/posts";
    }



    @PostMapping("/posts/{id}/delete")
    public String deletePost(@PathVariable long id, @ModelAttribute Post post) {
        postService.delete(id);
        return "redirect:/posts";
    }


}
