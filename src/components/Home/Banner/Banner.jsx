import React, { useEffect } from "react";
import slide1 from "../../../assets/images/slider/slide-1.jpg";
import slide2 from "../../../assets/images/slider/slide-2.jpg";
import slide3 from "../../../assets/images/slider/slide-3.jpg";
import slide4 from "../../../assets/images/slider/slide-4.jpg";
import Imports from "../../Imports/Imports";
import "./banner.css";

// AOS & Swiper
import AOS from "aos";
import "aos/dist/aos.css";

import SwiperCore from "swiper";
import Swiper from "swiper";
import { Pagination, Navigation, Autoplay, Parallax } from "swiper/modules";

// Swiper styles
import "swiper/css"; // core styles
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/parallax";

// Register modules
Swiper.use([Pagination, Navigation, Autoplay, Parallax]);

const Banner = () => {
  useEffect(() => {
    // Destroy previous instance if exists
    if (
      window.bannerSwiper &&
      typeof window.bannerSwiper.destroy === "function"
    ) {
      window.bannerSwiper.destroy(true, true);
    }

    // Initialize Swiper
    window.bannerSwiper = new SwiperCore(".swiper-container", {
      loop: true,
      speed: 1000,
      parallax: true,
      autoplay: {
        delay: 6500,
        disableOnInteraction: false,
      },
      watchSlidesProgress: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class="${className}">${index + 1}</span>`;
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="wpo-hero-slider wpo-hero-style-2">
      <Imports />

      <div className="wedding-announcement">
        <div className="couple-text">
          <h2 data-aos="fade-up" data-aos-duration="1000">
            Planning Your Everlasting Memories
          </h2>
          <p data-aos="fade-up" data-aos-duration="1800">
            Let’s Make Your Day Memorable. Your Successful Wedding is Our Job.
          </p>
        </div>
      </div>

      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div
              className="slide-inner slide-bg-image"
              style={{ backgroundImage: `url(${slide1})` }}
            ></div>
          </div>
          <div className="swiper-slide">
            <div
              className="slide-inner slide-bg-image"
              style={{ backgroundImage: `url(${slide2})` }}
            ></div>
          </div>
          <div className="swiper-slide">
            <div
              className="slide-inner slide-bg-image"
              style={{ backgroundImage: `url(${slide3})` }}
            ></div>
          </div>
          <div className="swiper-slide">
            <div
              className="slide-inner slide-bg-image"
              style={{ backgroundImage: `url(${slide4})` }}
            ></div>
          </div>
        </div>

        {/* Pagination */}
        <div className="swiper-pagination"></div>

        {/* Optional Navigation buttons */}
        {/* <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div> */}
      </div>
    </section>
  );
};

export default Banner;
