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
            Corporate Gallery
          </h2>
          <p>
            From leadership summits to product launches, Evenire creates
            immersive corporate experiences that align with your brand and
            purpose. We manage events for 300 to 1000+ guests with seamless
            flow, impactful setups, and flawless execution, leaving a lasting
            impression on every attendee.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
