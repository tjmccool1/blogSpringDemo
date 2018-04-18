package com.codeup.demo.controller;

import com.codeup.demo.services.StringTransformService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class serviceTestController {

    //injecting the string transform
    StringTransformService stSVC;

    public serviceTestController(StringTransformService stSVC){
        this.stSVC = stSVC;
    }

//    @GetMapping("/word/{word}")
//    @ResponseBody
//    public String returnFirstLetter(@PathVariable String word){
//        String firstLetter;
//        return "The first letter is: " + firstLetter;
//    }
}
