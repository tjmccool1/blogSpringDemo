package com.codeup.demo.services;


import org.springframework.stereotype.Service;

@Service
public class StringTransformService {

    public String getFirstLetter(String word){
        return word.substring(0,1);
    }


}
