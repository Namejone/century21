import "../css/style.css";
import Alpine from "alpinejs";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

// currentOpportunities Slider Activation
const swiper = new Swiper(".currentOpportunities", {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 16,
  loop: true,
  pagination: {
    el: ".currentOpportunities-swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".currentOpportunities-next-btn",
    prevEl: ".currentOpportunities-prev-btn",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// currentOpportunities Slider Activation
const swiperRentalProperties = new Swiper(".rentalProperties", {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 16,
  loop: true,
  pagination: {
    el: ".rentalProperties-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".rentalProperties-next-btn",
    prevEl: ".rentalProperties-prev-btn",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Testimonial Slider Activation
const testimonialSwiper = new Swiper(".testimonial-swiper", {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 16,
  loop: true,
  pagination: {
    el: ".testimonial-swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".testimonial-next-btn",
    prevEl: ".testimonial-prev-btn",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

window.Alpine = Alpine;

// Optional: Add Alpine plugins here if needed
// import collapse from '@alpinejs/collapse'
// Alpine.plugin(collapse)

Alpine.start();
