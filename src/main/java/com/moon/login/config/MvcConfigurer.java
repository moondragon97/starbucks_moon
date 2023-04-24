package com.moon.login.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MvcConfigurer implements WebMvcConfigurer{
    @Override
    public void addViewControllers(ViewControllerRegistry registry){
        WebMvcConfigurer.super.addViewControllers(registry);

        registry.addViewController("/login").setViewName("/member/login");
        registry.addViewController("/member-join").setViewName("/member/join");
        registry.addViewController("/member-list").setViewName("/member/list");
    }
}
