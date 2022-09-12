// Swiper Js

let swiperHome = new Swiper(".mySwiperHome", {
     speed: 1200,
     navigation: {
          nextEl: "#home .swiper-button-next",
          prevEl: "#home .swiper-button-prev",
     },

});


let newsCarousel = new Swiper(".newsCarousel", {
     spaceBetween: 10,
     slidesPerView: 1,
     speed: 1200,
     pagination: {
          el: ".newsCarousel .swiper-pagination",
          clickable: true,
     },
});

let descussionsSwiper = new Swiper(".descussions-swiper", {
     spaceBetween: 10,
     slidesPerView: 1,
     speed: 1200,
     pagination: {
          el: ".descussions-swiper .swiper-pagination",
          clickable: true,
     },
});

let mediuPortalsSwiper = new Swiper(".mediu-portals-swiper", {
     spaceBetween: 10,
     slidesPerView: 1,
     speed: 1200,
     pagination: {
          el: ".mediu-portals-swiper .swiper-pagination",
          clickable: true,
     },
});
let academicsSwiper = new Swiper(".academics-swiper", {
     spaceBetween: 10,
     slidesPerView: 1,
     speed: 1200,
     pagination: {
          el: ".academics-swiper .swiper-pagination",
          clickable: true,
     },
});
let subdomainSwiper = new Swiper(".subdomain-swiper", {
     spaceBetween: 10,
     slidesPerView: 1,
     speed: 1200,
     pagination: {
          el: ".subdomain-swiper .swiper-pagination",
          clickable: true,
     },
});



const searchBox = document.querySelector('.search-box');
const searchIcon = document.getElementById('search-icon');
const searchIconMob = document.getElementById('search-icon-mob');
const closeSearch = document.getElementById('close-search');

if (searchIcon) {
     searchIcon.addEventListener('click', (e) => {
          searchBox.classList.toggle('fade');
     })
}
if (searchIconMob) {
     searchIconMob.addEventListener('click', () => {
          searchBox.classList.toggle('fade');
     })
}
if (closeSearch) {
     closeSearch.addEventListener(('click'), () => {
          searchBox.classList.remove('fade')
     })
}



(function ($bs) {
     const CLASS_NAME = 'has-child-dropdown-show';
     $bs.Dropdown.prototype.toggle = function (_orginal) {
          return function () {
               document.querySelectorAll('.' + CLASS_NAME).forEach(function (e) {
                    e.classList.remove(CLASS_NAME);
               });
               let dd = this._element.closest('.dropdown').parentNode.closest('.dropdown');
               for (; dd && dd !== document; dd = dd.parentNode.closest('.dropdown')) {
                    dd.classList.add(CLASS_NAME);
               }
               return _orginal.call(this);
          }
     }($bs.Dropdown.prototype.toggle);

     document.querySelectorAll('.dropdown').forEach(function (dd) {
          dd.addEventListener('hide.bs.dropdown', function (e) {
               if (this.classList.contains(CLASS_NAME)) {
                    this.classList.remove(CLASS_NAME);
                    e.preventDefault();
               }
               e.stopPropagation(); // do not need pop in multi level mode
          });
     });

})(bootstrap);

jQuery.noConflict();
(function ($) {
     $(function () {

     });
})(jQuery);