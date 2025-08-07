import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import contactImg1 from "../../../assets/images/home-form/left.jpg";
import contactImg2 from "../../../assets/images/home-form/right.jpg";
import vector1 from "../../../assets/images/contact/1.png";
import vector2 from "../../../assets/images/contact/2.png";

const ContactSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="wpo-contact-section section-padding-60">
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col col-xl-4 col-lg-3 col-md-3 col-12">
            <div className="contact-img" data-aos="fade-right">
              <img src={contactImg1} alt="Contact Left" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
            <div className="wpo-contact-section-wrapper">
              <div className="wpo-contact-form-area" data-aos="zoom-in">
                <div className="wpo-section-title">
                  <h4>Let’s bring your next event to life</h4>
                  <h2>Anytime & Anywhere</h2>
                </div>
                <form
                  method="post"
                  className="contact-validation-active"
                  id="contact-form-main"
                >
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <select name="guest" className="form-control">
                      <option disabled selected>
                        Event Type
                      </option>
                      <option>Weddings Events</option>
                      <option>Schools Events</option>
                      <option>Corporate Events</option>
                    </select>
                  </div>
                  <div className="date">
                    <input
                      className="form-control"
                      name="date"
                      autoComplete="off"
                      type="text"
                      id="datepicker"
                      placeholder="Event Date"
                    />
                  </div>
                  <div className="submit-area">
                    <button type="submit" className="theme-btn-s3">
                      Send An Inquiry
                    </button>
                    <div id="c-loader">
                      <i className="ti-reload"></i>
                    </div>
                  </div>
                  <div className="clearfix error-handling-messages">
                    <div id="success">Thank you</div>
                    <div id="error">
                      Error occurred while sending email. Please try again
                      later.
                    </div>
                  </div>
                </form>
              </div>

              {/* Decorative Vectors */}
              <div className="vector-1" data-aos="fade-up">
                <img src={vector1} alt="Vector Decoration 1" />
              </div>
              <div className="vector-2" data-aos="fade-down">
                <img src={vector2} alt="Vector Decoration 2" />
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="col col-xl-4 col-lg-3 col-md-3 col-12">
            <div className="contact-img" data-aos="fade-left">
              <img src={contactImg2} alt="Contact Right" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
