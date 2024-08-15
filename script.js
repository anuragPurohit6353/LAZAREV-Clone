function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}


function navAnimation(){
    var nav = document.querySelector(".nav-part2");

nav.addEventListener("mouseenter",function(){
    var tl = gsap.timeline();
    tl.to(".nav-bottom",{
        height : "32vh",
        duration : 0.2,
        top : "20%",
    })
    tl.to(".nav-part2 h4 span",{
        duration : 0.2,
        display : "block",
    })
    tl.to(".nav-part2 h4 span",{
        y : 5,
        duration : 0.2,
        stagger :{
            amount : 0.6,
        }
    })
})
nav.addEventListener("mouseleave",function(){
    var tl = gsap.timeline();
    

    tl.to(".nav-part2 h4 span",{
        duration : 0.1,
        display : "none",
    })
    tl.to(".nav-part2 h4 span",{
        y : -10,
        // duration : 0.2,
        stagger :{
            amount : 0,
        }
    })
    tl.to(".nav-bottom",{
        height: "12vh",
        duration : 0.2,
        top : "0%",
    })
})
}


// Mouse Moving Effect on Text 

// Using getBoundingClientReact => We Know The Size Of DIv Containeaar 
// Very Important Properties For MouseMove Listner

var page2animation = function () {
    let rightElem = document.querySelectorAll(".right-elem");

rightElem.forEach(function (elem){
    elem.addEventListener("mouseenter",function(){
           gsap.to(elem.childNodes[3],{
                opacity : 1,
                scale : 1,
           })
    })
    elem.addEventListener("mouseleave",function(){
           gsap.to(elem.childNodes[3],{
                opacity : 0,
                scale : 0,
           })
    })
    elem.addEventListener("mousemove", function (dets) {

        gsap.to(elem.childNodes[3], {
            x: dets.x - elem.getBoundingClientRect().x,
            y: dets.y - elem.getBoundingClientRect().y-150,
           })
    })
})
}

var page3VideoAnimation = function(){
    var page3Center = document.querySelector(".page3-center");
var video = document.querySelector(".page3 video");

page3Center.addEventListener("click",function() {
    video.play();
    gsap.to("video",{
        transform : "scaleX(1) scaleY(1)",
        opacity : "1",
        borderRadius : "0",
    })
})
video.addEventListener("click",function() {
    video.pause();
    gsap.to("video",{
        transform : "scaleX(0) scaleY(0)",
        opacity : "0",
        borderRadius : "30px",
    })
})
}

// page 6 image hover :

var section = document.querySelectorAll(".sec-right");

section.forEach(function(elem){
    elem.addEventListener("mouseenter",function() {
        elem.childNodes[3].style.opacity = "1",
        elem.childNodes[3].play();
    })
    elem.addEventListener("mouseleave",function() {
        elem.childNodes[3].style.opacity = "0",
        elem.childNodes[3].load();
    
    })


})


function loadingAnimation() {

    var tl = gsap.timeline()
    tl.from(".page1", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })
    tl.from(".page1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "150px",
        duration: 1,
        ease: "expo.out"
    })
    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })

    tl.from(".page1 h1, .page1 p, .page1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })
}
function page8Animations() {
    gsap.from("#btm8-part2 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm8-part2",
            scroller: ".main",
            // markers:true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })
}

loadingAnimation();

// locomotiveAnimation();

navAnimation();

page2animation();

page3VideoAnimation();

page8Animations();