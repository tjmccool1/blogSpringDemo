package com.codeup.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

/**
*Create a controller StringTransformController with the following methods
*
*url = "/string/reverse/{string}"
*returns = the string reversed
*
*url = "/string/caps/{string}"
*returns = string in all caps
*
*url = "/string/both/string"
*returns = string reversed in all caps (avoid repeating logic)
 */



@Controller
public class StringTransformController {

    @GetMapping("/string/reverse/{string}")
    @ResponseBody
    public String reversed(@PathVariable String string){
       return new StringBuilder(string).reverse().toString();
    }
//
    @GetMapping("/string/caps/{string}")
    @ResponseBody
    public String caps(@PathVariable String string){
        return string.toUpperCase();
    }
//
    @GetMapping("/string/both/{string}")
    @ResponseBody
    public String reversedCaps(@PathVariable String string){
        return reversed(string).toUpperCase();
    }
}
