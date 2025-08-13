import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PrivacyAndPolicy = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className="section-padding-60 bg-theme">
      <div className="container">
        <div className="wpo-section-title no-margin-bottom no-lines text-start p-3">
          <h2
            className="text-capitalize"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            Terms & Conditions
          </h2>

          <p>Dated: 13-08-2025</p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyAndPolicy;
