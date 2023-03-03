// Header scroll
let nav = document.querySelector('.navbar');
let image = document.querySelector('.image');

window.addEventListener('scroll', ()=>{
    let navHeight = nav.getBoundingClientRect().height;
    let fromTop = window.scrollY;
    
    if(fromTop > navHeight){
        nav.classList.add('fixed-nav');
    }

    else{
        nav.classList.remove('fixed-nav');
    }
})


// Hamburger navigation
let hamburgerBtn = document.querySelector('.hamburger-btn');
let closeBtn = document.querySelector('.close-btn');
let navbar = document.querySelector('header nav ul');


hamburgerBtn.addEventListener('click', ()=>{
    navbar.classList.add('active');
    hamburgerBtn.classList.remove('active');
    closeBtn.classList.add('active');
});

closeBtn.addEventListener('click', ()=>{
    navbar.classList.remove('active');
    closeBtn.classList.remove('active');
    hamburgerBtn.classList.add('active');
});


window.onscroll = () =>{
    navbar.classList.remove('active');
    closeBtn.classList.remove('active');
    hamburgerBtn.classList.add('active');
}





