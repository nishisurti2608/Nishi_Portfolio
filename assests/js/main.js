/*==================== MENU SHOW Y HIDDEN ====================*/
const nav_menu= document.getElementById('nav-menu'),
      nav_toggle = document.getElementById('nav-toggle'),
      nav_close= document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */

if(nav_toggle){
    nav_toggle.addEventListener('click', () => {
        nav_menu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

if(nav_close){
    nav_close.addEventListener('click',()=>
    nav_menu.classList.remove('show-menu'))
}


/*==================== REMOVE MENU MOBILE ====================*/


/*==================== ACCORDION SKILLS ====================*/


/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 