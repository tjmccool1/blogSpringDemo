package com.codeup.demo.Repository;

import com.codeup.demo.model.Post;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PostRepository extends CrudRepository <Post, Long>{

//    public void deleteById(long id);




}
