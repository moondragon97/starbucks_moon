package com.moon.login.controller;

import com.moon.login.entity.Board;
import com.moon.login.service.BoardService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("board")
public class BoardController {

    final BoardService service;

    public BoardController(BoardService service){
        this.service = service;
    }

    @GetMapping("/list")
    public ResponseEntity<List<Board>> selectAll(){
        List<Board> boards = service.doSelectAll();
        return ResponseEntity.ok(boards);
    }
}
