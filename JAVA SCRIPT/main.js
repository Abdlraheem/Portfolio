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

            
          document.addEventListener("DOMContentLoaded", function
            (event){
              let circle = document.querySelectorAll('.circle');
              circle.forEach(function(progress){
                let degree = 0;
                var targetDegree = parseInt(progress.getAttribute
                  ('data-degree'));
                  let color = progress.getAttribute('data-color');
                  let number = progress.querySelector('.number');

                  var interval = setInterval(function(){
                    degree += 1;
                    if (degree > targetDegree){
                      clearInterval(interval);
                      return;
                    }
                    progress.style.background = `conic-gradient(${color} ${degree}%, #222 0%)`;
                    number.innerHTML = degree + '<span>%</span>';
                    number.style.color = white;
                  },50)
              })

          })