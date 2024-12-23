var crsr= document.querySelector("#cursor")
var crsrBlur= document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x - 10+"px"
    crsr.style.top = dets.y- 10+"px"
    crsrBlur.style.left = dets.x - 200+"px"
    crsrBlur.style.top = dets.y - 200+"px"
})

var h4all= document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale= 3
        crsr.style.border= "0.2px solid #fff"
        crsr.style.backgroundColor= "transparent"
    })
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale= 1
        crsr.style.border= "0px solid #95c11e"
        crsr.style.backgroundColor= "#95c11e"
    })
})


gsap.to("#nav",{
    backgroundColor: "Black",
    height: "100px",
    duration:0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -5%",
        end: "top -6%",
        scrub: 0.5
    }
})
gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -20%",
        end: "top -65%",
        scrub: 2.5
    }
}) 

gsap.from("#about-us img, #about-us-in", {
    y: 50,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: "#about-us",
        scroller:"body",
        // markers: true,
        start: "top 60%",
        end: "top 55%",
        scrub: 3
    }
})

// GSAP Scroll Animation
gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1
    }
});

// GSAP Hover Animation
document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
        gsap.to(card, {
            scale: 1.1,
            duration: 0.3,
            ease: "power2.out"
        });
    });

    card.addEventListener("mouseleave", () => {
        gsap.to(card, {
            scale: 1,
            duration: 0.2,
            ease: "power2.out"
        });
    });
});
gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 45%",
        scrub: 3
    }
})
gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 45%",
        scrub: 3
    }
})
gsap.from("#page4 h1",{
    y: 50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 4
    }
})
var h4all= document.querySelectorAll("#footer h4")
h4all.forEach(function(eleme){
    eleme.addEventListener("mouseenter", function(){
        crsr.style.scale= 2
        crsr.style.border= "0.2px solid #fff"
        crsr.style.backgroundColor= "transparent"
    })
    eleme.addEventListener("mouseleave", function(){
        crsr.style.scale= 1
        crsr.style.border= "0px solid #95c11e"
        crsr.style.backgroundColor= "#95c11e"
    })
})
var h4all= document.querySelectorAll("#footer #img-logo")
h4all.forEach(function(eleme){
    eleme.addEventListener("mouseenter", function(){
        crsr.style.scale= 2
        crsr.style.border= "0.2px solid #fff"
        crsr.style.backgroundColor= "transparent"
    })
    eleme.addEventListener("mouseleave", function(){
        crsr.style.scale= 1
        crsr.style.border= "0px solid #95c11e"
        crsr.style.backgroundColor= "#95c11e"
    })
})
var h4all= document.querySelectorAll("#footer #logo-container #social-media")
h4all.forEach(function(eleme){
    eleme.addEventListener("mouseenter", function(){
        crsr.style.scale= 1.6
        crsr.style.border= "0.2px solid #fff"
        crsr.style.backgroundColor= "transparent"
    })
    eleme.addEventListener("mouseleave", function(){
        crsr.style.scale= 1
        crsr.style.border= "0px solid #95c11e"
        crsr.style.backgroundColor= "#95c11e"
    })
})
var h4all= document.querySelectorAll("#footer #bottom-footer #footer-links")
h4all.forEach(function(eleme){
    eleme.addEventListener("mouseenter", function(){
        crsr.style.scale= 4
        crsr.style.border= "0.2px solid #fff"
        crsr.style.backgroundColor= "transparent"
    })
    eleme.addEventListener("mouseleave", function(){
        crsr.style.scale= 1
        crsr.style.border= "0px solid #95c11e"
        crsr.style.backgroundColor= "#95c11e"
    })
})
var h4all= document.querySelectorAll("#footer #bottom-footer .made-by")
h4all.forEach(function(eleme){
    eleme.addEventListener("mouseenter", function(){
        crsr.style.scale= 4
        crsr.style.border= "0.2px solid #fff"
        crsr.style.backgroundColor= "transparent"
    })
    eleme.addEventListener("mouseleave", function(){
        crsr.style.scale= 1
        crsr.style.border= "0px solid #95c11e"
        crsr.style.backgroundColor= "#95c11e"
    })
})