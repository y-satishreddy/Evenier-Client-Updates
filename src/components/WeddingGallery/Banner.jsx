import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WelcomeSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // initialize with 1s duration globally
  }, []);

  return (
    <section className="section-padding-60 bg-theme">
      <div className="container">
        <div className="wpo-section-title no-margin-bottom no-lines text-start p-3">
          <h2 className="text-capitalize" data-aos="zoom-in">
            Wedding Gallery
          </h2>
          <p>
            At Evenire, we do more than organise events. We create experiences
            that reflect who you are and what you imagine. Whether it is a
            quiet, intimate wedding or a grand celebration filled with hundreds
            of guests, we approach each occasion with thoughtfulness,
            creativity, and a commitment to excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
