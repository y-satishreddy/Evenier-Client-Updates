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
            Production
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
