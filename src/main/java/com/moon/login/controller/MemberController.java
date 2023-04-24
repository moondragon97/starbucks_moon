package com.moon.login.controller;

import com.moon.login.entity.Member;
import com.moon.login.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
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
    public String login(String userId, String password, Model model){
        System.out.println(userId);
        Member member = service.doSelectOne(userId);
        System.out.println(password);
        if(member == null || !(member.getPassword().equals(password))){
            System.out.println("in");
            model.addAttribute("errorMessage", "아이디 및 비밀번호를 다시 확인해 주세요.");
            model.addAttribute("userId", userId);
            return "/member/login";
        }
        return "redirect:/member-list";
    }
}
