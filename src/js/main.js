import Alpine from "alpinejs";
// Alpine Intersect plugin for CounterUp
import intersect from "@alpinejs/intersect";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// Custom Swiper Slider Pagination Image
import "../css/style.css";
import sliderPagiIcon from "../imgs/icons/slider-pagi-active-icon.svg";

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
    renderBullet: function (index, className) {
      return `<span class="${className}">
                <span class="bullet-dot"></span>
                <img class="bullet-img" src="${sliderPagiIcon}" alt="active" />
            </span>`;
    },
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
// AlpineJS Plugin
Alpine.plugin(intersect);

// CounterUp Alpine
window.counterUp = function (target, duration = 2000) {
  return {
    current: 0,
    started: false,

    startCount() {
      if (this.started) return;
      this.started = true;

      const startTime = performance.now();
      const self = this;

      function animate(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const eased = 1 - Math.pow(1 - progress, 3);

        self.current = Math.round(eased * target);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          self.current = target;
        }
      }

      requestAnimationFrame(animate);
    },
  };
};

Alpine.start();
