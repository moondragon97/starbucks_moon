package com.moon.login.controller;

import com.moon.login.entity.Member;
import com.moon.login.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("member")
public class MemberController {

    final MemberService service;

    public MemberController(MemberService service) {
        this.service = service;
    }

    @GetMapping("/chk_id")
    @ResponseBody
    public ResponseEntity<Map<String, String>> chkId(@RequestParam("userId") String userId){
        Member member = service.doSelectOne(userId);

        Map<String, String> responseBody = new HashMap<>();
        if(member != null){
            responseBody.put("message", "중복된 아이디입니다.");
            return new ResponseEntity<>(responseBody, HttpStatus.UNAUTHORIZED);
        }

        responseBody.put("message", "사용 가능한 아이디입니다.");
        return new ResponseEntity<>(responseBody, HttpStatus.OK);
    }

    @PostMapping("/signup")
    public ResponseEntity<HttpStatus> insert(@RequestBody Member member){
        // TODO: 비밀번호 암호화

        service.doInsert(member);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/login")
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
