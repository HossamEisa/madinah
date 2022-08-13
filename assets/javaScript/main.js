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
     searchIcon.addEventListener('click', (e) => {
          console.log(e.target);
          console.log(this);
          console.log(searchIcon);
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


//toggle dropdown menu open/close
var toClose = false

function toggle(e) {
     e.stopPropagation();
     var btn = this;
     var menu = btn.children[1];
     btn.classList.toggle('menuOpen');


     while (menu && menu.nodeType != 1) {
          menu = menu.children[1]
     }
     if (!menu) return;
     if (menu.style.display !== 'block') {
          menu.style.display = 'block';
          if (toClose) toClose.style.display = "none";
          toClose = menu;
     } else {
          menu.style.display = 'none';
          toClose = false;
     }

};

function closeAll() {
     toClose.style.display = 'none';
     toClose = false
};

window.addEventListener("DOMContentLoaded", function () {
     document.querySelectorAll(".menu-item-has-children").forEach(function (btn) {
          btn.addEventListener("click", function(e){
               e.preventDefault();
          });
          btn.addEventListener("click", toggle, true);

     });
});

window.onclick = function (event) {
     if (toClose) {
          closeAll.call(event.target);
     }
};