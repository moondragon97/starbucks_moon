package com.moon.login.service;

import com.moon.login.entity.Board;
import com.moon.login.repository.BoardRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BoardService {

    final BoardRepository repo;

    public BoardService(BoardRepository repo) {this.repo = repo;}

    public  void doInsert(Board board) {repo.save(board);}

    public Board doSelectOne(Long id){
        Optional<Board> optionalBoard = repo.findById(id);
        return optionalBoard.orElse(null);
    }

    public List<Board> doSelectAll(){
        return repo.findAll();
    }

    public void doUpdate(Board board){repo.save(board);}

    public void doDeleteOne(Long id){repo.deleteById(id);}
}
