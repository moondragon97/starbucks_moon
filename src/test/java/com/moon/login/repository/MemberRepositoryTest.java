package com.moon.login.repository;

import com.moon.login.entity.Member;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class MemberRepositoryTest {
    @Autowired
    MemberRepository repo;

    @Test
    void selectMembers(){
        List<Member> memberList = repo.findAll();

        System.out.println("start");
        for(Member member : memberList){
            System.out.println(member.getUserId());
        }
        System.out.println("end");
    }

}