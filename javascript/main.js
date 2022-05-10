'use strict';


$("#show-menu").on("click", () =>{
  $("#hidden-menu").animate({
    "left": 0
  }, 500);
});

$("#hidden-menu .close").on("click", function(){
  $("#hidden-menu").animate({
    "left": "-170px"
  }, 200);
});

const learnMore = document.querySelector('#learn-more'),
      learnMoreWindow = document.querySelector('#learn-window'),
      modalClose = document.querySelector('.modal__close'),
      privateMore = document.querySelector('#private-more'),
      privateWindow = document.querySelector('#private-window'),
      toBook = document.querySelector('#to-book'),
      bookWindow = document.querySelector('#book-window'),
      reg = document.querySelector('#reg'),
      priv = document.querySelector('#priv'),
      submitBtn = document.querySelectorAll('.submit__btn'),
      allInput = document.querySelectorAll('input'),
      modalArea = document.querySelector('.modal__area'),
      headerLogo = document.querySelector('.header__logo');

submitBtn.forEach( (item) =>{
  item.addEventListener('click', (event) =>{
    const target = event.target;
    target.closest('.modal').classList.add('hidden');
    allInput.forEach( (item) =>{
      item.value = '';
    });
    modalArea.value = '';
  });
});

const closeModal = (event) =>{
  const target = event.target;
  if (target.classList.contains('modal') || target.classList.contains('modal__close') || target.classList.contains('to-close')) {
    target.closest('.modal').classList.add('hidden');

    allInput.forEach( (item) =>{
      item.value = '';
    });
    modalArea.value = '';

  }
};

reg.addEventListener('change', () =>{
    if (reg.checked) {
      priv.checked = false;
    } 
  });

priv.addEventListener('change', () =>{
  if (priv.checked) {
    reg.checked = false;
  } 
});


learnMore.addEventListener('click', ()=>{
	learnMoreWindow.classList.remove('hidden');
});

privateMore.addEventListener('click', ()=>{
  privateWindow.classList.remove('hidden');
});

toBook.addEventListener('click', ()=>{
  bookWindow.classList.remove('hidden');
});



document.addEventListener('click', closeModal);


/*header*/

const header = $('.header');
let introHeight = $('.intro').innerHeight();
let scrollOffset = $(window).scrollTop();

function checkScroll(scrollOffset){
  if (scrollOffset >= introHeight) {
    header.addClass('fixed');
  } else{
    header.removeClass('fixed');
  }
}

$(window).on('scroll', function(){
  scrollOffset = $(this).scrollTop();
  checkScroll(scrollOffset);
});




/*scroll*/

///////////////
$(function(){
  checkScroll(scrollOffset);
///////////////

$('[data-scroll]').on('click', function(event){
  event.preventDefault();

  let $this = $(this);
  let blockId = $this.data('scroll');
  let blockOffset = $(blockId).offset().top;

  $('.nav a').removeClass('active');
  $this.addClass('active');

  $('html, body').animate({
    scrollTop: blockOffset - $('.header').innerHeight()
  }, 2500);
});

$(headerLogo).on('click', () =>{
  $('.nav a').removeClass('active');
  $('html, body').animate({
    scrollTop: 0
  }, 1000);
});


/////////////////
});
////////////////

/*AOS*/

AOS.init({
  // Global settings:
  disable: 'phone', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 100, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


//video

const videoImg = document.querySelector('.video__img');

let video = document.querySelector('.video');
video.volume = .3;

videoImg.addEventListener('click', () =>{
	video.play();
	videoImg.style.display = 'none';
});

video.addEventListener('ended', () =>{
	videoImg.style.display = 'block';
});

video.addEventListener('playing', () =>{
	videoImg.style.display = 'none';
	console.log(this);
});


//gallery

const $lgContainer = document.getElementById("inline-gallery-container");

const inlineGallery = lightGallery($lgContainer, {
  container: $lgContainer,
  dynamic: true,
  // Turn off hash plugin in case if you are using it
  // as we don't want to change the url on slide change
  hash: false,
  // Do not allow users to close the gallery
  closable: false,
  // Add maximize icon to enlarge the gallery
  showMaximizeIcon: true,
  // Append caption inside the slide item
  // to apply some animation for the captions (Optional)
  appendSubHtmlTo: ".lg-item",
  // Delay slide transition to complete captions animations
  // before navigating to different slides (Optional)
  // You can find caption animation demo on the captions demo page
  slideDelay: 100,
  plugins: [lgZoom, lgThumbnail],
  dynamicEl: [
    {
      src:
        "img/gallery/gallery1.jpg",
      responsive:
        "img/gallery/gallery1.jpg 800",
      thumb:
        "img/gallery/gallery1.jpg"
    },

    {
      src:
        "img/gallery/gallery2.jpg",
      responsive:
        "img/gallery/gallery2.jpg 800",
      thumb:
        "img/gallery/gallery2.jpg"
    },

    {
      src:
        "img/gallery/gallery3.jpg",
      responsive:
        "img/gallery/gallery3.jpg 800",
      thumb:
        "img/gallery/gallery3.jpg"
    },

    {
      src:
        "img/gallery/gallery4.jpg",
      responsive:
        "img/gallery/gallery4.jpg 800",
      thumb:
        "img/gallery/gallery4.jpg"
    },

    {
      src:
        "img/gallery/gallery5.jpg",
      responsive:
        "img/gallery/gallery5.jpg 800",
      thumb:
        "img/gallery/gallery5.jpg"
    },

    {
      src:
        "img/gallery/gallery6.jpg",
      responsive:
        "img/gallery/gallery6.jpg 800",
      thumb:
        "img/gallery/gallery6.jpg"
    },

    {
      src:
        "img/gallery/gallery7.jpg",
      responsive:
        "img/gallery/gallery7.jpg 800",
      thumb:
        "img/gallery/gallery7.jpg"
    },

    {
      src:
        "img/gallery/gallery8.jpg",
      responsive:
        "img/gallery/gallery8.jpg 800",
      thumb:
        "img/gallery/gallery8.jpg"
    },

    {
      src:
        "img/gallery/gallery9.jpg",
      responsive:
        "img/gallery/gallery9.jpg 800",
      thumb:
        "img/gallery/gallery9.jpg"
    },

    {
      src:
        "img/gallery/gallery10.jpg",
      responsive:
        "img/gallery/gallery10.jpg 800",
      thumb:
        "img/gallery/gallery10.jpg"
    },

    {
      src:
        "img/gallery/gallery11.jpg",
      responsive:
        "img/gallery/gallery11.jpg 800",
      thumb:
        "img/gallery/gallery11.jpg"
    }

  ],

  thumbWidth: 60,
  thumbHeight: "40px",
  thumbMargin: 15
});

setTimeout(() => {
  inlineGallery.openGallery();
}, 200);