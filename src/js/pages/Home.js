import $ from 'jquery'

export default class Home {
  constructor() {
    console.log('home!!')
    this.bindevent()
  }
  bindevent(){
    this.showHeader()
    this.humberger()
    this.swiper()
    this.showContents()
  }
  showHeader(){
    $(window).on('scroll',()=>{
      console.log($(window).scrollTop())
      if($(window).scrollTop()>300){
        $(".js-header").addClass("is-putColor")
      }else if($(window).scrollTop()<300){
        $(".js-header").removeClass("is-putColor")
      }
    })
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
  swiper(){
    const mySwiper = new Swiper ('.swiper-container', {
      speed: 1000,
      
      loop: true,
      effect: "fade",
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
      },
      fadeEffect: {
        crossFade: true
      },
      autoplay:{
        delay: 10000,
      }
    });
  }
  showContents(){
    const countElement = document.querySelectorAll(".is-hide")
    $(window).on("scroll",()=>{
      for(let i = 0; i < countElement.length; i++) {
        const triggerMargin = 100;
        if (window.innerHeight > countElement[i].getBoundingClientRect().top + triggerMargin) {
          countElement[i].classList.add('is-show');
        }
      }
    })
  }
}
