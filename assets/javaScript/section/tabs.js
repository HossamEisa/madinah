import {
     swiperServices
} from './swiper.js';

// Var Tabs Mediu
const tabsMediu = document.querySelectorAll( '.tabs .item' );
const tabsMediuArray = Array.from( tabsMediu )
const tabsMediuContent = document.querySelectorAll( '#mediu-center .tab-mediu-content' );
const tabsContentMediuArray = Array.from( tabsMediuContent )
const tabsSmallMediu = document.querySelectorAll( '#mediu-center .tab-small  li' );
const tabsSmallMediuArray = Array.from( tabsSmallMediu )

// Var Tabs Services
const tabsServices = document.querySelectorAll( '.services-list li' );
export const tabsServicesArray = Array.from( tabsServices )

const tabsSmallServices = document.querySelectorAll( '#services .tab-small .tab-list-small li' );
export const tabsSmallServicesArray = Array.from( tabsSmallServices )


// Tabs in Mediu Center
export let tabsMediuLarge = tabsMediuArray.forEach( element => {
     element.addEventListener( 'click', ( e ) => {
          tabsMediuArray.forEach( ( el ) => {
               el.classList.remove( "active" );
          } )
          e.currentTarget.classList.add( "active" )
          tabsContentMediuArray.forEach( ( div ) => {
               div.style.display = "none"
          } )
          document.querySelector( `.tab-mediu-content` + e.currentTarget.dataset.tab ).style.display = "block"

     } )
} )

export let tabsMediuSmall = tabsSmallMediuArray.forEach( element => {
     element.addEventListener( 'click', ( e ) => {
          tabsSmallMediuArray.forEach( ( el ) => {
               el.classList.remove( "activ" );
          } )
          e.currentTarget.classList.add( "activ" )
          tabsContentMediuArray.forEach( ( div ) => {
               div.style.display = "none"
          } )
          console.log( `.tab-mediu-content` + e.currentTarget.dataset.tab );
          document.querySelector( `.tab-mediu-content` + e.currentTarget.dataset.tab ).style.display = "block"

     } )
} )

// Tabs in Services Section
export let tabsServicesLarge = tabsServicesArray.forEach( element => {
     element.addEventListener( 'click', ( e ) => {
          e.preventDefault()
          let indexSlide = Number( e.currentTarget.dataset.indexslide )
          tabsServicesArray.forEach( ( el ) => {
               el.classList.remove( "active" );
          } )
          e.currentTarget.classList.add( "active" )
          swiperServices.slideTo( indexSlide )

     } )
} )

export let tabsServicesSmall = tabsSmallServicesArray.forEach( element => {
     element.addEventListener( 'click', ( e ) => {
          e.preventDefault()
          let indexSlide = Number( e.currentTarget.dataset.indexslideSmall )
          tabsSmallServicesArray.forEach( ( el ) => {
               el.classList.remove( "activ" );
          } )
          e.currentTarget.classList.add( "active" )
          swiperServices.slideTo( indexSlide )
     } )
} )
