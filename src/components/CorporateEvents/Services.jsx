import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceDetails = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  const services = [
    "Theme & Design",
    "Venue Planning",
    "Budget Structuring",
    "Dreamy Decor",
    "Gourmet Catering",
    "Guest Management",
  ];

  return (
    <section className="wpo-service-details-area section-padding-60 pt-0 pb-0">
      <div className="container">
        <div className="wpo-p-details-section">
          <div className="process-wrap">
            <div className="row">
              {services.map((title, index) => (
                <div className="col-lg-4 col-md-6 col-12" key={index}>
                  <div
                    className="process-item"
                    data-aos="fade-up"
                    data-aos-duration={`${1000 + index * 200}`}
                  >
                    <div className="process-icon">
                      <i className="fi flaticon-dove"></i>
                    </div>
                    <div className="process-text">
                      <h3>{title}</h3>
                      <p>
                        If you are going to use a passage of Lorem Ipsum, you
                        need to be sure there isn't.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
