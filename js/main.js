
var main = document.querySelector(".main-container");
const cursor = document.querySelector("#cursor");
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle-btn');
const navClose = document.getElementById('nav-colse-btn');
var tl = gsap.timeline();
var initialPath = `M 10 100 Q 250 1000 490 100`;
var finalPath = `M 10 100 Q 500 1000 490 100`;
var path = `M 10 100 Q 500 100 990 100`;
var finpath = `M 10 100 Q 500 100 990 100`;








//  CURSOR MOVING CIRCLE
main.addEventListener("mousemove", function (moves) {
    gsap.to(cursor, {
        x: moves.x,
        y: moves.y,
        position: "fixed"


    })
})




// FULL NAVIAGATION MENU LINKS ANIMATION
const ani = function () {
    tl.from(".nav-item1", {
        y: -10,
        opacity: 0,
        duration: 0.4,
        // stagger: 1,
    })
    tl.from(".nav-item2", {
        y: -10,
        opacity: 0,
        duration: 0.1,
        // stagger: 1,
    })
    tl.from(".nav-item3", {
        y: -10,
        opacity: 0,
        duration: 0.2,
        // stagger: 1,
    })
    tl.from(".nav-item4", {
        y: -10,
        opacity: 0,
        duration: 0.3,
        // stagger: 1,
    })
}
document.onload = ani();


//   stars animation

    gsap.to(".star" ,{
        x:1400,
        y:1000,
        scale:0.1,
        opacity: 0,
        duration: 10,
        delay:0.2
    })
    gsap.to(".star2" ,{
        x:1800,
        y:300,
        scale:0.1,
        opacity: 0,
        delay:0.5,
        duration: 8})
    gsap.to(".star3" ,{
        x:1600,
        y:200,
        scale:0.1,
        opacity: 0,
        delay:1,
        duration: 8})
    gsap.to(".star4" ,{
        x:1600,
        y:300,
        scale:0.1,
        opacity: 0,
        delay:0.1,
        duration: 8})
    gsap.to(".star5" ,{
        x:1800,
        y:400,
        scale:0.1,
        opacity: 0,
        delay:1.5,
        duration: 8})
    gsap.to(".star6" ,{
        x:1900,
        y:200,
        scale:0.1,
        opacity: 0,
        delay:1.5,
        duration: 8})
    
    gsap.to(".star7" ,{
        x:2000,
        y:200,
        scale:0.1,
        opacity: 0,
        delay:1.5,
        duration: 8})







// var string = document.querySelector(".cv");
// string.addEventListener("mousemove", function (dets) {
//     path = `M 10 100 Q 500 ${dets.y} 990 100`;
//     gsap.to(".cv svg path", {
//         attr: { d: path },
//         duration: 0.2,
//         ease: "power3.out"
//     })


// })
// string.addEventListener("mouseleave", function () {

//     gsap.to(".cv svg path", {
//         attr: { d: finpath },
//         duration: 0.3,
//         ease: "elastic.out(1,0.2"

//     })

// })



// ======================================================

gsap.from("#cv-title ", {
    x: -800,
    opacity: 0,
    scale:0,
    scrollTrigger: {
        trigger: "#cv-title",
        scroller: "body",
        start: "top 85%",
        end: "top 20%",
        scrub:2
    }
})


// MENU SHOW

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
        ani()

    })
};

// MENU HIDDEN

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
};


