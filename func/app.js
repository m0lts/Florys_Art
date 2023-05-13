// EXPAND PORTFOLIO SECTION
const extraImages = document.querySelectorAll('.portfolio-img-ext');
const dropDownArrow = document.querySelector('.see-more-arrow');
const more = document.querySelector('.more');
const less = document.querySelector('.less');
const extBtn = document.querySelector('.port-ext-btn');

extBtn.addEventListener("click", function() {
    extraImages.forEach(img => {
        img.classList.toggle('show');
    });
    dropDownArrow.classList.toggle('clicked');
    more.classList.toggle('hide');
    less.classList.toggle('hide');
});

// scroll and loading effects

const heroImg = document.querySelector('.hero-img-cont');

window.addEventListener('DOMContentLoaded', function() {
    
})
