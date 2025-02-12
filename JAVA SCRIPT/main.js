const scrollRevealOption = {
    distance: "90px",
    origin: "bottom",
    duration: 600,
 
};
ScrollReveal().reveal(".section__container h3",{
...scrollRevealOption ,

});
ScrollReveal().reveal(".section__container h1",{
    ...scrollRevealOption ,
    origin: "bottom",
   
 
    });
    ScrollReveal().reveal(".section__container h2",{
        ...scrollRevealOption ,
        origin: "bottom",
        delay: 1500,
    
      
        });
    ScrollReveal().reveal(".animated__text",{
        ...scrollRevealOption ,
        origin: "right",
        delay: 100,
    
      
        });
  
     
     
                ScrollReveal().reveal(".section__container button span",{
                    ...scrollRevealOption ,
                    origin: "left",
                    delay: 1300,
                
                  
                    });
                    ScrollReveal().reveal(".section__container button",{

                            ...scrollRevealOption ,
                            origin: "right",
                            delay: 1000,
                    });
                    ScrollReveal().reveal(".nav__links li",{

                        ...scrollRevealOption ,
                        origin: "top",
                        interval: 300,
                        delay: 1000,
                        

                });
                ScrollReveal().reveal(".timeline .main__container",{

                    ...scrollRevealOption ,
                    origin: "top",
                    interval: 300,
                    delay: 600,
                    

            });