"use strict";var header=document.querySelector("#header");$("#menu-toggle").click(function(){header.classList.toggle("active")}),$("#header-list a").click(function(){header.classList.remove("active")});var prev=0;$(window).on("load scroll",function(){var a=$(this).scrollTop();$(this).scrollTop()<=$("#hero").outerHeight()&&$("#curtain").css("transform","translate3d(0, "+-.5*a+"px, 0)"),$("#header").toggleClass("hidden",prev<a),prev=a}),$(window).on("load",function(){gsap.registerPlugin(ScrollTrigger),gsap.registerPlugin(CustomEase),CustomEase.create("header","0.666, 0, 0.237, 1"),CustomEase.create("name","0.4, 0, 0.2, 1"),CustomEase.create("section","0.645, 0.045, 0.355,1"),gsap.from("[data-gsap=header]",{duration:.85,ease:"header",y:-200}),gsap.from("[data-gsap=first-name]",{display:"block",duration:.9,ease:"name",y:"100vh"}),gsap.from("[data-gsap=last-name]",{delay:.1,display:"block",duration:.9,ease:"name",y:"200vh"}),gsap.from("[data-gsap=about]",{autoAlpha:0,duration:1,ease:"section",scrollTrigger:"[data-gsap=about]",y:30}),gsap.utils.toArray("[data-gsap=project]").forEach(function(a){gsap.from(a,{autoAlpha:0,duration:1,ease:"section",scrollTrigger:a,y:30})}),gsap.from("[data-gsap=contact]",{autoAlpha:0,duration:1,ease:"section",y:30,scrollTrigger:"[data-gsap=contact]"})});

// Spotlight Effect
const body = document.body;

if(window.matchMedia("(hover: hover)").matches) {
    body.onmousemove = e => {
        const rect = body.getBoundingClientRect(),
              x = e.clientX - rect.left,
              y = e.clientY - rect.top;
    
        body.style.setProperty("--mouse-x", `${x}px`);
        body.style.setProperty("--mouse-y", `${y}px`);
    };    
}