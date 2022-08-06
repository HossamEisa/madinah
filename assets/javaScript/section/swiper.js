// Swiper Js

export let swiperHome = new Swiper( "#home .mySwiperHome", {

     navigation: {
          nextEl: ".swiper-button.next",
          prevEl: ".swiper-button.prev",
     },
     // autoplay: {
     //      delay: 10000,
     //      disableOnInteraction: false,
     // },
} );

export let swiperServices = new Swiper( ".mySwiperServices", {
     spaceBetween: 50,
     navigation: {
          nextEl: "#services .swiper-button.next",
          prevEl: "#services .swiper-button.prev",
     },
} );




export let swiperMEDIU = new Swiper( ".mySwiperMEDIU", {
     slidesPerView: "auto",
     spaceBetween: 15,
     navigation: {
          nextEl: "#mediu-center .swiper-button.next",
          prevEl: "#mediu-center .swiper-button.prev",
     },
     breakpoints: {

          992: {
               slidesPerView: 2.5,
               spaceBetween: 15,
          },
          720: {
               slidesPerView: 2.5,
               spaceBetween: 15,
          },
          400: {
               slidesPerView: 1.5,
               spaceBetween: 15,
          },
     },
} );
export let swiperMediuTab3 = new Swiper( ".mySwiperMEDIU.tab-3", {
     spaceBetween: 10,
     slidesPerView: 4,
     freeMode: true,
     watchSlidesProgress: true,
} );
export let swiperMediuTab32 = new Swiper( ".mySwiperMEDIU-2.tab-3", {
     spaceBetween: 0,
     thumbs: {
          swiper: swiperMediuTab3,
     },
} );

export let swiperMediuTab4 = new Swiper( ".mySwiperMediuTab4", {
     spaceBetween: 30,
     slidesPerGroup: 2,
     autoplay: {
          delay: 8000,
          disableOnInteraction: false,
     },
     breakpoints: {

          1020: {
               slidesPerView: 3,
               spaceBetween: 15,
          },
          992: {
               slidesPerView: 2.5,
               spaceBetween: 15,
          },
          780: {
               slidesPerView: 2.5,
               spaceBetween: 15,
          },
          400: {
               slidesPerView: 1.5,
               spaceBetween: 15,
          },


     },
} );

export let swiperAcademics = new Swiper( ".mySwiperAcademics", {
     spaceBetween: 30,
     slidesPerGroup: 2,
     autoplay: {
          delay: 8000,
          disableOnInteraction: false,
     },
     navigation: {
          nextEl: "#academics .swiper-button.next",
          prevEl: "#academics .swiper-button.prev"
     },
     breakpoints: {
          1114: {
               slidesPerView: 4.5,
               spaceBetween: 15,
          },
          1024: {
               slidesPerView: 4,
               spaceBetween: 15,
          },
          992: {
               slidesPerView: 3.5,
               spaceBetween: 15,
          },
          780: {
               slidesPerView: 2,
               spaceBetween: 15,
          },
          400: {
               slidesPerView: 1.1,
               spaceBetween: 15,
          },
          340: {
               slidesPerView: 1.1,
               spaceBetween: 15,
          },


     },
} );





// swiper in home
export let mySwiperHome3 = new Swiper( ".mySwiperHome3", {
     spaceBetween: 0,
     slidesPerGroup: 1,
     autoplay: {
          delay: 8000,
          disableOnInteraction: false,
     },
     navigation: {
          nextEl: "#academics .swiper-button.next",
          prevEl: "#academics .swiper-button.prev"
     },
     breakpoints: {
          400: {
               slidesPerView: 2,
               spaceBetween: 10,
          },
          340: {
               slidesPerView: 1,
               spaceBetween: 10,
          },


     },
} );



// Swiper In Apply
export let swiperApplay = new Swiper( ".mySwiperApplay", {
     spaceBetween: 30,
     pagination: {
          el: ".swiper-pagination",
          clickable: true,
     },
     autoplay: {
          delay: 7000,
          disableOnInteraction: false,
     },
} );


// swiper in journals in mediu
export let swiperJournals = new Swiper( ".swiperJournals", {
     spaceBetween: 0,
     slidesPerGroup: 1,
     autoplay: {
          delay: 8000,
          disableOnInteraction: false,
     },
     navigation: {
          nextEl: "#academics .swiper-button.next",
          prevEl: "#academics .swiper-button.prev"
     },
     breakpoints: {
          1665: {
               slidesPerView: 3.2,
               spaceBetween: 15,
          },
          1114: {
               slidesPerView: 3,
               spaceBetween: 10,
          },
          780: {
               slidesPerView: 2.5,
               spaceBetween: 10,
          },
          400: {
               slidesPerView: 1.5,
               spaceBetween: 10,
          },
          340: {
               slidesPerView: 1,
               spaceBetween: 10,
          },


     },
} );

// swiper in discussions in mediu
export let swiperDiscussions = new Swiper( ".swiper-discussions", {
     spaceBetween: 30,
     slidesPerGroup: 2,
     autoplay: {
          delay: 8000,
          disableOnInteraction: false,
     },
     navigation: {
          nextEl: "#academics .swiper-button.next",
          prevEl: "#academics .swiper-button.prev"
     },
     breakpoints: {
          1114: {
               slidesPerView: 3,
               spaceBetween: 15,
          },
          1024: {
               slidesPerView: 2.9,
               spaceBetween: 15,
          },
          992: {
               slidesPerView: 2.5,
               spaceBetween: 15,
          },
          780: {
               slidesPerView: 2,
               spaceBetween: 15,
          },
          400: {
               slidesPerView: 1.5,
               spaceBetween: 15,
          },
          340: {
               slidesPerView: 1,
               spaceBetween: 15,
          },


     },
} );


const btnAutoPlay = document.querySelector( '.swiper-button.auto' )




export let autoPlay = btnAutoPlay.addEventListener( 'click', ( e ) => {
     if ( swiperServices.autoplay.running == false ) {
          swiperServices.autoplay.start()
     } else {
          swiperServices.autoplay.stop()
     }
} )



