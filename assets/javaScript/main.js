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
const closeSearch = document.getElementById('close-search');

searchIcon.addEventListener('click', () => {
     searchBox.classList.toggle('fade');
})
closeSearch.addEventListener(('click'), () => {
     searchBox.classList.remove('fade')
})