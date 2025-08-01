import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import img1 from "../../../assets/images/testimonial/img-1.jpg";
import img2 from "../../../assets/images/testimonial/img-2.jpg";
import img3 from "../../../assets/images/testimonial/img-3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import AOS from "aos";
import "./testimonials.css";

const TestimonialSlider = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
    AOS.init({ once: true });
  }, []);

  const settingsFor = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    asNavFor: nav2,
    adaptiveHeight: true,
  };

  const settingsNav = {
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: nav1,
    focusOnSelect: true,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <section className="wpo-testimonial-section section-padding-60 pt-0">
      <div className="wpo-section-title">
        <h2 className="text-dark">Testimonials</h2>
      </div>
      <div className="container">
        <div
          className="wpo-testimonial-wrap p-1 shadow-sm rounded wpo-about-text text-center"
          data-aos="fade-up"
        >
          <div className="row align-items-center">
            {/* Image Slider */}
            <div
              className="col col-lg-7"
              data-aos="fade-right"
              data-aos-duration="1700"
            >
              <Slider
                {...settingsFor}
                asNavFor={nav2}
                ref={slider1}
                className="slider-for"
              >
                <div className="testimonial-img">
                  <img src={img1} alt="Testimonial 1" />
                </div>
                <div className="testimonial-img">
                  <img src={img2} alt="Testimonial 2" />
                </div>
                <div className="testimonial-img">
                  <img src={img3} alt="Testimonial 3" />
                </div>
              </Slider>
            </div>

            {/* Text Slider */}
            <div
              className="col col-lg-5"
              data-aos="fade-left"
              data-aos-duration="1700"
            >
              <div className="wpo-testimonial-items">
                <Slider
                  {...settingsNav}
                  asNavFor={nav1}
                  ref={slider2}
                  className="slider-nav"
                >
                  <div className="wpo-testimonial-item">
                    <div className="wpo-testimonial-text">
                      <i className="fi flaticon-quotation"></i>
                      <p>
                        Varius aenean fringilla consectetur adipiscing felis,
                        lectus. Id eros, porta quam quis proin non vulputate
                        lacinia imperdiet. Mus ut amet tortor iEros, sed at
                        semper sed in tempor ultrices sed. Id sem nulla quisque
                        vel duiscoue necrd.
                      </p>
                      <div className="wpo-testimonial-text-btm">
                        <h3>Marlin & Williamson</h3>
                        <span>Wedding - 23.05.2025</span>
                      </div>
                    </div>
                  </div>
                  <div className="wpo-testimonial-item">
                    <div className="wpo-testimonial-text">
                      <i className="fi flaticon-quotation"></i>
                      <p>
                        Varius aenean fringilla consectetur adipiscing felis,
                        lectus. Id eros, porta quam quis proin non vulputate
                        lacinia imperdiet. Mus ut amet tortor iEros, sed at
                        semper sed in tempor ultrices sed. Id sem nulla quisque
                        vel duiscoue necrd.
                      </p>
                      <div className="wpo-testimonial-text-btm">
                        <h3>Rihanna & William</h3>
                        <span>Wedding - 08.12.2025</span>
                      </div>
                    </div>
                  </div>
                  <div className="wpo-testimonial-item">
                    <div className="wpo-testimonial-text">
                      <i className="fi flaticon-quotation"></i>
                      <p>
                        Varius aenean fringilla consectetur adipiscing felis,
                        lectus. Id eros, porta quam quis proin non vulputate
                        lacinia imperdiet. Mus ut amet tortor iEros, sed at
                        semper sed in tempor ultrices sed. Id sem nulla quisque
                        vel duiscoue necrd.
                      </p>
                      <div className="wpo-testimonial-text-btm">
                        <h3>Sarah & Daniel</h3>
                        <span>Wedding - 12.08.2025</span>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
