const nav_slide = () => {

    const navList = document.querySelector('.nav-list');
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelectorAll('.nav-items');


    burger.addEventListener('click', () => {
        navList.classList.toggle('nav-active');
    
        //animate links
        navLinks.forEach((link, index) => {
             
            //for this animation to occur again and again
            if(link.style.animation){
                link.style.animation = ''; //if already present then no need
            }
            else{
                link.style.animation = `nav-fade .5s ease-in forwards ${index / 7 }s`;//delay for each nav link
            }
            
        });

        burger.classList.toggle('toggle');
        burger.classList.toggle('fix-burger');

});

}

nav_slide();
