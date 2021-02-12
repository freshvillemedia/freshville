
// Initializations
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let slideInterval;


// ========================================================
// ========================================================


// offcanvas-collapse Navbar {Opening and closing}
$(function () {
  'use strict'
  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })
})

// $('.js-scroll-trigger').click(function() {
//   $('.offcanvas-collapse').toggleClass('hide')
// });


// Custom Home Slider
//=====================================================//
const nextSlide = () => {
  // Get the current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next slide
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current start
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () => {
  // Get the current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev slide
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current last
    slides[slides.length -1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
}

// Button  events
next.addEventListener('click', e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto slide
if (auto) {
  // Run next slide interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}






    // $('.js-scroll-trigger').click(function() {
    //   $('.navbar-collapse').collapse('hide');
    // });
  

  // script
  //   // When the user scrolls down 60px from the top of the document, resize the navbar's padding and the logo's font size
  //   window.onscroll = function() {scrollFunction()};

  //   function scrollFunction() {
  //     if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
  //       document.getElementById("homeNavbar").style.background = "#212529";
  //       document.getElementById("homeNavbar").style.padding = ".5rem";
  //       document.getElementById("goTop").style.display = "block";
  //     } else {
  //       document.getElementById("homeNavbar").style.background = "inherit";
  //       document.getElementById("homeNavbar").style.padding = "1.2rem .5rem .5rem .5rem";
  //       document.getElementById("goTop").style.display = "none";
  //     }
  //   }
  // </script>

















