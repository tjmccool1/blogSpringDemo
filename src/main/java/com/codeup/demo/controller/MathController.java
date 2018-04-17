package com.codeup.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MathController {

    @GetMapping("/add/{num1}/and/{num2}")
    @ResponseBody
    public String Add(@PathVariable int num1, @PathVariable int num2){
        return "" + (num1 + num2);
    }

    @GetMapping("/subtract/{num1}/from/{num2}")
    @ResponseBody
    public String Subtract(@PathVariable int num1, @PathVariable int num2){
        return "" + (num1 - num2);
    }
    @GetMapping("/multiply/{num1}/and/{num2}")
    @ResponseBody
    public String multiply(@PathVariable int num1, @PathVariable int num2){
        return "" + (num1 * num2);
    }
    @GetMapping("/divide/{num1}/by/{num2}")
    @ResponseBody
    public String divide(@PathVariable int num1, @PathVariable int num2){
        if (num1 == 0 || num2 == 0){
            return "Error! You cannot divide by 0.";
        }

        return "" + (num1 / num2);
    }

}
