package com.moon.login.service;

import com.moon.login.entity.Member;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class MemberServiceTest {

    @Autowired
    MemberService service;

    @Test
    void doInsert(){
        Member member = Member.builder()
                .userId("dd")
                .password("vv")
                .email("ee")
                .phoneNo("12")
                .userName("이름")
                .build();

        service.doInsert(member);
    }

    @Test
    void doSelect(){
        Member member = service.doSelectOne("dd");
        System.out.println(member.getPassword());
    }

    @Test
    void doUpdate(){
        Member member = service.doSelectOne("dd");
        member.setEmail("변322일");
        service.doUpdate(member);
    }

    @Test
    void doDelete(){
        service.doDeleteOne("용");
    }
}