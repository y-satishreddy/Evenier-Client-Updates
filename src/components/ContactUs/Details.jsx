import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useInView } from "react-intersection-observer";

const ContactPageSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  // InView refs
  const [addressRef, addressInView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const [emailRef, emailInView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const [callRef, callInView] = useInView({ threshold: 0, triggerOnce: true });
  const [titleRef, titleInView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const [formRef, formInView] = useInView({ threshold: 0, triggerOnce: true });

  return (
    <section className="wpo-contact-pg-section section-padding-60">
      <div className="container">
        <div className="row">
          <div className="col col-lg-10 offset-lg-1">
            <div className="office-info">
              <div className="row">
                {/* Address */}
                <div
                  className="col col-xl-4 col-lg-6 col-md-6 col-12"
                  ref={addressRef}
                >
                  <div
                    className={`office-info-item ${
                      addressInView ? "aos-animate" : ""
                    }`}
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                  >
                    <div className="office-info-icon">
                      <div className="icon">
                        <i className="fi flaticon-maps-and-flags"></i>
                      </div>
                    </div>
                    <div className="office-info-text">
                      <h2>Address</h2>
                      <p>7 Green Lake Street Crawfordsville, IN 47933</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div
                  className="col col-xl-4 col-lg-6 col-md-6 col-12"
                  ref={emailRef}
                >
                  <div
                    className={`office-info-item ${
                      emailInView ? "aos-animate" : ""
                    }`}
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                  >
                    <div className="office-info-icon">
                      <div className="icon">
                        <i className="fi flaticon-email"></i>
                      </div>
                    </div>
                    <div className="office-info-text">
                      <h2>Email Us</h2>
                      <p>email@evenire.com</p>
                      <p>info@evenire.com</p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div
                  className="col col-xl-4 col-lg-6 col-md-6 col-12"
                  ref={callRef}
                >
                  <div
                    className={`office-info-item ${
                      callInView ? "aos-animate" : ""
                    }`}
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                  >
                    <div className="office-info-icon">
                      <div className="icon">
                        <i className="fi flaticon-phone-call"></i>
                      </div>
                    </div>
                    <div className="office-info-text">
                      <h2>Call Now</h2>
                      <p>+1 800 123 456 789</p>
                      <p>+1 800 123 654 789</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Title */}
            <div
              className={`wpo-contact-title ${
                titleInView ? "aos-animate" : ""
              }`}
              ref={titleRef}
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="800"
            >
              <h2>Have A Question?</h2>
              <p>Please fill out the form below, and we’ll get back to you.</p>
            </div>

            {/* Contact Form */}
            <div
              className={`wpo-contact-form-area ${
                formInView ? "aos-animate" : ""
              }`}
              ref={formRef}
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="800"
            >
              <form
                className="contact-validation-active"
                id="contact-form-main"
              >
                <div>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    placeholder="Your Name*"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email*"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    name="adress"
                    id="adress"
                    placeholder="Address"
                  />
                </div>
                <div>
                  <select
                    name="service"
                    className="form-control"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Services
                    </option>
                    <option>Photography</option>
                    <option>The Rehearsal Dinner</option>
                    <option>The Afterparty</option>
                    <option>Videographers</option>
                    <option>Perfect Cake</option>
                    <option>All Of The Above</option>
                  </select>
                </div>
                <div className="fullwidth">
                  <textarea
                    className="form-control"
                    name="note"
                    id="note"
                    placeholder="Message..."
                  ></textarea>
                </div>
                <div className="submit-area">
                  <button type="submit" className="theme-btn-s4">
                    Get in Touch
                  </button>
                  <div id="loader">
                    <i className="ti-reload"></i>
                  </div>
                </div>
                <div className="clearfix error-handling-messages">
                  <div id="success">Thank you</div>
                  <div id="error">
                    Error occurred while sending email. Please try again later.
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPageSection;
