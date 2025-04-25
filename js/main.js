
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



// set up text to print, each item in array is new line
var aText = new Array(
    "<b>From</b> concept development <br><b>to</b> the final execution, develop web products by coding wireframes into elements that users can interact with.", 
    "I believe that<b> great design</b> not only captures attention but also drives meaningful connections and speaks louder than words."
    );
    var iSpeed = 150; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
    
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
        
        function typewriter()
        {
        sContents =  ' ';
        iRow = Math.max(0, iIndex-iScrollAt);
        var destination = document.getElementById("typedtext");
        
        while ( iRow < iIndex ) {
        sContents += aText[iRow++] + '<br />';
        }
        destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + " |";
        if ( iTextPos++ == iArrLength ) {
        iTextPos = 0;
        iIndex++;
        if ( iIndex != aText.length ) {
        iArrLength = aText[iIndex].length;
        setTimeout("typewriter()", 500);
        }
        } else {
        setTimeout("typewriter()", iSpeed);
        }
    }
    
    gsap.from("#typedtext", {
        
            opacity: 0,
        y:30,
        scrollTrigger: {
            trigger: "#typedtext",
            scroller: "body",
            start: "top 85%",
            end: "top 50%",
            scrub:2,
            // markers: true
        }

    })
    typewriter();


   
    // ABOUT SECTION
    gsap.from("#about",{
        opacity: 0,
        y:100,
        scrollTrigger:{
            trigger:"#about",
            start: "top 90%",
            end: "top 13%",
            markers: true,
            scrub:2
        }
    })