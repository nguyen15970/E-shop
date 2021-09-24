const menu = document.querySelector(".menu")
const navOpen = document.querySelector(".hamburger")
const naClose = document.querySelector(".close")
const navBar = document.querySelector(".nav")
const header = document.querySelector(".header")

const navLeft = menu.getBoundingClientRect().left;
var isMenu = false

navOpen.addEventListener("click", () =>{
    if(isMenu == false){
        menu.classList.add("menu-active")
        header.classList.add("header-x")
        naClose
        this.isMenu  = true;
    }
    else{
        menu.classList.remove("menu-active")
        header.classList.remove ("header-x")
        this.isMenu  = false;
    }
})
naClose.addEventListener("click", () =>{
    if(isMenu == true){
        menu.classList.remove("menu-active")
        header.classList.remove ("header-x")
        this.isMenu  = false;
    }
   
})

// scrooll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500|| document.documentElement.scrollTop > 500) {
   navBar.classList.add("nav-scroll")
//    menu.classList.add("menu-active-scroll")

  } else {
    navBar.classList.remove("nav-scroll")
    // menu.classList.remove("menu-active-scroll")

  }
}
// gsap.from(".logo", {opacity:0,duration: 1 , delay:0.5 ,y :-10});
// gsap.from(".hero-content", {opacity:0,duration: 1 , delay:0.5 ,y :-10});
// gsap.from(".hero-img", {opacity:1,duration: 1 , delay:1 ,y :-20});
// gsap.from(".logo", {opacity:0,duration: 1 , delay:0.5 ,y :-10});
// gsap.from(".logo", {opacity:0,duration: 1 , delay:0.5 ,y :-10});
// gsap.from(".logo", {opacity:0,duration: 1 , delay:0.5 ,y :-10});
// gsap.from(".logo", {opacity:0,duration: 1 , delay:0.5 ,y :-10});
$(document).ready(function(){
   

    AOS.init();
})