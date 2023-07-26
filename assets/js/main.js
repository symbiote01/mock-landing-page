/*=================== SHOW MENU ===================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*=================== MENU SHOW ===================*/
/* VALIDATE IF CONSTANT EXISTS */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*=================== MENU HIDDEN ===================*/
/* VALIDATE IF CONTANT EXISTS */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=================== REMOVE MENU MOBILE ===================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // WHEN WE CLICK ON EACH NAV__LINK, WE REMOVE THE SHOW-MENU CLASS
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=================== CHANGE BACKGROUND HEADER ===================*/
function scrollHeader(){
    const header = document.getElementById('header')
    // WHEN THE SCROLL IS GREATER THAN 50 VIEWPORT HEIGHT, ADD THE SCROLL-HEADER CLASS TO THE HEADER TAG
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=================== SHOW SCROLL UP ===================*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // WHEN THE SCROLL IS HIGHER THAN 200 VIEWPORT HEIGHT, ADD THE SHOW-SCROLL CLASS TO THE A TAG WITH THE SCROLL-TOP CLASS
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=================== SCROLL SECTIONS ACTIVE LINK ===================*/



/*=================== SCROLL REVEAL ANIMATION ===================*/
