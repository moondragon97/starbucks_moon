package com.moon.login.service;

import com.moon.login.entity.Member;
import com.moon.login.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MemberService {

    @Autowired
    MemberRepository repo;

    public void doInsert(Member member){
        repo.save(member);
    }

    public Member doSelectOne(String userId){
        Optional<Member> optionalMember = repo.findById(userId);
        return optionalMember.orElse(null);
    }

    public void doUpdate(Member member){
        repo.save(member);
    }

    public void doDeleteOne(String userId){
        repo.deleteById(userId);
    }
}
