$(document).ready(function(){
    $('.slider').slick({
        prevArrow: '<div class="prevButton"><img src="../images/back.svg"/></div>',
        nextArrow: '<div class="nextButton"><img src="../images/next.svg"/></div>'
    });
});

const siteLogoController = (function() {
    const _logo = document.querySelector('.site-logo img');

    window.onscroll = () => {
        if(window.scrollY > 50) {
            _logo.style.height = "6rem";
            _logo.parentNode.style.top = ".75rem";
            _logo.parentNode.style.left = "3.3rem";
        } else {
            _logo.style.height = "11rem";
            _logo.parentNode.style.top = "1.5rem";
            _logo.parentNode.style.left = "1rem";
        }
    }

    window.onresize = () => {
        if(window.innerWidth < 1376) {
            _logo.style.height = "6rem";
            _logo.parentNode.style.top = ".75rem";
            _logo.parentNode.style.left = "3.3rem";
        } else {
            _logo.style.height = "11rem";
            _logo.parentNode.style.top = "1.5rem";
            _logo.parentNode.style.left = "1rem";
        }
    }
}());