package com.moon.login.controller;

import com.moon.login.entity.Member;
import com.moon.login.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MemberController {
    @Autowired
    MemberService service;

    @PostMapping("/member_insert")
    public String member_insert(@ModelAttribute Member member){

        // TODO: 비밀번호 암호화

        service.doInsert(member);
        return "forward:/login";
    }

    @PostMapping("/member_login")
    public ResponseEntity<String> login(@RequestBody Member member) {
        String userId = member.getUserId();
        String password = member.getPassword();
        Member storedMember = service.doSelectOne(userId);
        if (storedMember == null || !storedMember.getPassword().equals(password)) {
            return new ResponseEntity<>("아이디 및 비밀번호를 다시 확인해 주세요.", HttpStatus.UNAUTHORIZED);
        }
        return new ResponseEntity<>("로그인 성공", HttpStatus.OK);
    }
}
