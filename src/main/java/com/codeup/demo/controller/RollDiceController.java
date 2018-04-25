package com.codeup.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class RollDiceController {

    @GetMapping("/roll-dice")
//    @ResponseBody
    public String showDicePage(){
        return "roll-dice";
    }

    @GetMapping("/roll-dice/{guess}")
    public String rolling(@PathVariable int guess, Model model){
        // Generating a rnd number from 1 to 6
        int rnd = (int) (Math.random() * 6 + 1);
//        System.out.println(rnd);
        // Determines if you win or not
        boolean win = (rnd == guess) ? true : false;

        model.addAttribute("guess", guess);
        // request.setAttribute("guess", guess);
        model.addAttribute("rnd", rnd);
        model.addAttribute("win", win);

        return "roll-dice";
    }

}
