package com.codeup.demo.services;


import com.codeup.demo.Repository.PostRepository;
import com.codeup.demo.model.Post;
import javafx.geometry.Pos;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import java.util.ArrayList;
import java.util.List;



@Service
public class PostService {

    private PostRepository postDao;

    private List<Post> posts;

    public PostService(PostRepository postDao) {
//        this.posts = new ArrayList<>();
        this.postDao = postDao;
//        createPosts();
    }

    public Iterable<Post> getAllPosts() {
//        return posts;
        return postDao.findAll();
    }

    public Post getPost(long id) {
//        return posts.get(((int) id) - 1);
        return postDao.findOne(id);
    }

//    public void createPosts() {
//        this.save(new Post("Test Title 1", "This is a test post description 1."));
//        this.save(new Post("Test Title 2", "This is a test post description 2."));
//        this.save(new Post("Test Title 3", "This is a test post description 3."));
//        this.save(new Post("Test Title 4", "This is a test post description 4."));
//    }





    public void save(Post post){
//        post.setId(this.posts.size() + 1);
//        this.posts.add(post);
        postDao.save(post);
    }

    public void delete(long id) {
        postDao.delete(id);
    }

}
