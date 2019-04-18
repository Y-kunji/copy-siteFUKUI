import $ from 'jquery'

export default class Home {
  constructor() {
    console.log('home!!')
    this.bindevent()
  }
  bindevent(){
    this.humberger()
    //this.swiper()
  }

  humberger(){
    $(".js-header__humberger").on('click',() => {
      $(() => {
        $("header").toggleClass('is-open');
      })
    })
    $(".js-header_overlay").on("click",() => {
      $(() => {
        $("header").toggleClass('is-open');
      })
    })
  }
  // swiper(){
  //   const mySwiper = new Swiper ('.swiper-container', {
  //     speed: 1000,
      
  //     loop: true,
  //     effect: "fade",
  //     slidesPerView: 1,
  //     navigation: {
  //       nextEl: '.swiper-button-next',
  //       prevEl: '.swiper-button-prev',
  //     },
  //     pagination: {
  //       el: '.swiper-pagination',
  //     },
  //     fadeEffect: {
  //       crossFade: true
  //     },
  //     autoplay:{
  //       delay: 10000,
  //     }
  //   });
  // }
}
