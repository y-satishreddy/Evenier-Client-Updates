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
            School Events
          </h2>
          <p>
            From annual days to concerts, Evenire handles large-scale school
            events with care and precision. Our planning is child-safe,
            crowd-friendly, and designed to manage up to 3000 attendees with
            ease and efficiency. Every event is vibrant, well-organised, and
            memorable for students, staff, and parents alike.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
