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
            Wedding Events
          </h2>
          <p>
            Your wedding is not just a date on the calendar; it's a celebration
            of love. It is a collection of emotions, promises, and moments that
            stay with you forever. From the first sketch of your vision to the
            final walk down the aisle, we are by your side. We help you bring
            every detail to life in a way that feels personal, heartfelt, and
            unforgettable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
