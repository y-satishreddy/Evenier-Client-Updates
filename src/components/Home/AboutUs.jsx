import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  return (
    <section className="section-padding min-vh-lg-100 min-vh-sm-auto d-flex align-items-center justify-content-center bg-theme-home">
      <div className="container">
        <div className="wpo-section-title no-margin-bottom no-lines responsive-section text-center bg-theme-home">
          {/* <h4>About Us</h4> */}

          <h2
            className="mb-3 text-dark"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            Welcome To Evenire <br />
            For All Your Exceptional Events
          </h2>

          <span className="curtain-reveal"></span>

          <p className="text-dark-custom">
            At Evenire, we do more than organise events. We create experiences
            that reflect who you are and what you imagine. Whether it is a
            quiet, intimate wedding or a grand celebration filled with hundreds
            of guests, we approach each occasion with thoughtfulness,
            creativity, and a commitment to excellence.
          </p>

          <a
            href="/about-us"
            title="Know More"
            className="knowmore d-inline-block mt-3"
          >
            Know More
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
