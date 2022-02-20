/**
 * !functionality
 * ?explanation to terms
 */


/*==================== MENU SHOW Y HIDDEN ====================*/
const nav_menu= document.getElementById('nav-menu'),
      nav_toggle = document.getElementById('nav-toggle'),
      nav_close= document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant nav_toggle exists */
/* classList: It is a read-only property of an element that returns a live collection of CSS classes * */

if(nav_toggle){
    nav_toggle.addEventListener('click', () => { 
        nav_menu.classList.add('show-menu') //? will add class showmenu
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant nav_close exists */

if(nav_close){
    nav_close.addEventListener('click',()=>
    nav_menu.classList.remove('show-menu')) //? will remove class showmenu
}


/*==================== REMOVE MENU MOBILE ====================*/


const navLink= document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu') //? will remove show-menu class when we click on each nav__link
}

navLink.forEach(n=> n.addEventListener('click', linkAction))


/*==================== ACCORDION SKILLS ====================*/

const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader= document.querySelectorAll('.skills__header');

    function toggleSkills(){
        let itemClass = this.parentNode.className
        for(i = 0; i<skillsContent.length; i++){
            skillsContent[i].className = 'skills__content skills__close'
        }
        if(itemClass === 'skills__content skills__close'){
            this.parentNode.className = 'skills__content skills__open';
        }
    }

    skillsHeader.forEach((el) => {
        el.addEventListener('click', toggleSkills)
    })

/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 