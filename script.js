// navbar logic

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementsByClassName('nav-links')[0];
var isOpen = true;
hamburger.addEventListener('click', ()=>{
    navLinks.classList.toggle('active');
    if(isOpen){
        hamburger.classList.remove('fa-bars');
        hamburger.classList.add('fa-times');
        isOpen= !isOpen;
    }else{
        hamburger.classList.remove('fa-times');
        hamburger.classList.add('fa-bars');
        isOpen= !isOpen;
    }
})


// const sections = document.querySelectorAll('section');
// const options= {
//     threshold: 1
// };

// const observer = new IntersectionObserver(function(entries,observer){
//     entries.forEach(entry =>{
//         if(entry.isIntersecting){
//             let currentActive = document.querySelector("a.active")
//             if(currentActive){
//                 currentActive.classList.remove('active');
//             }
            
//             let newActive = document.querySelector(`a[href="#${entry.target.getAttribute('id')}"]`)
//             if(newActive !== null){
//                 newActive.classList.add('active')
//             }
//         };

//     })
    
// }, options)

// sections.forEach(section=>{
//     observer.observe(section)
// });

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
    } else {
    navbar.classList.remove("sticky");
    }
}
