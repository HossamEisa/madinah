// Exports Swiper js
import {
     mySwiperHome3,
     swiperAcademics,
     swiperApplay,
     swiperDiscussions,
     swiperHome,
     swiperJournals,
     // swiperMEDIU,
     swiperMEDIUNews,
     swiperMEDIUEvents,
     swiperMediuTab3,
     swiperMediuTab32,
     swiperMediuTab4,
     swiperServices
} from './section/swiper.js';

// const swiper = require( './section/swiper.js' );
swiperHome
mySwiperHome3
swiperApplay
swiperAcademics
// swiperMEDIU
swiperMEDIUNews
swiperMEDIUEvents,
swiperMediuTab3
swiperMediuTab32
swiperDiscussions
swiperJournals
swiperServices
swiperMediuTab4

// Exports Tabs
import {
     tabsMediuLarge,
     tabsMediuSmall,
     tabsServicesLarge,
     tabsServicesArray,
     tabsSmallServicesArray
} from './section/tabs.js';

tabsMediuLarge
tabsMediuSmall
tabsServicesLarge
// tabsServicesSmall


swiperServices.on('slideChange', function () {
     const index = this.realIndex;

     tabsSmallServicesArray.forEach((el) => {
          el.classList.remove("activ");
     })
     let tabsSmall = document.querySelectorAll('[data-indexslide-small]')
     let tabsArraySmall = Array.from(tabsSmall)
     tabsArraySmall.filter((e) => {
          let number = Number(e.getAttribute('data-indexslide-small'))
          if (number == index) {
               e.classList.add('activ')
          }
     })
     tabsServicesArray.forEach((el) => {
          el.classList.remove("active");
     })
     let tabs = document.querySelectorAll('[data-indexslide]')
     let tabsArray = Array.from(tabs)
     tabsArray.filter((e) => {
          let number = Number(e.getAttribute('data-indexslide'))
          if (number == index) {
               e.classList.add('active')
          }
     })
});




const searchBox = document.querySelector('.search-box');
const searchIcon = document.getElementById('search-icon');
const searchIconMob = document.getElementById('search-icon-mob');
const closeSearch = document.getElementById('close-search');

if (searchIcon) {
     searchIcon.addEventListener('click', () => {
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

     // for hover
     document.querySelectorAll('.dropdown-hover, .dropdown-hover-all .dropdown').forEach(function (dd) {
          dd.addEventListener('mouseenter', function (e) {
               let toggle = e.target.querySelector(':scope>[data-bs-toggle="dropdown"]');
               if (!toggle.classList.contains('show')) {
                    $bs.Dropdown.getOrCreateInstance(toggle).toggle();
                    dd.classList.add(CLASS_NAME);
                    $bs.Dropdown.clearMenus();
               }
          });
          dd.addEventListener('mouseleave', function (e) {
               let toggle = e.target.querySelector(':scope>[data-bs-toggle="dropdown"]');
               if (toggle.classList.contains('show')) {
                    $bs.Dropdown.getOrCreateInstance(toggle).toggle();
               }
          });
     });
})(bootstrap);