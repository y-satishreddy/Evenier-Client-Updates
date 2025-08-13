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
            Contact Us
          </h2>
          <p>
            Whether you have questions, feedback, or want to learn more about
            Evenire, feel free to reach out. Our team is ready to assist you and
            ensure you have the best experience with us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
