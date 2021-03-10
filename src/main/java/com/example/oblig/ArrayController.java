package com.example.oblig;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;


@RestController
public class ArrayController {
    
    private final List<Ticket> movieList = new ArrayList<>();

    @PostMapping("/save")
    public void getResult(Ticket inputMovie) {
        movieList.add(inputMovie);
    }


    @GetMapping("/tickets")
    public List<Ticket> getAll(){
        return movieList;
    }

    @GetMapping("/delete")
    public void delete() {
        movieList.clear();
    }
}
