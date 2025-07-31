import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useInView } from "react-intersection-observer";

const services = [
  {
    iconClass: "fi flaticon-dove",
    title: "Venue Sourcing",
    desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't.",
    duration: "1000",
    col: "col-lg-6 col-md-6 col-12",
  },
  {
    iconClass: "fi flaticon-edit",
    title: "Light & Sound Design",
    desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't.",
    duration: "1200",
    col: "col-lg-6 col-md-6 col-12",
  },
  {
    iconClass: "fi flaticon-wedding",
    title: "Screen Setup & Speaker Systems",
    desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't.",
    duration: "1400",
    col: "col-lg-4 col-md-6 col-12",
  },
  {
    iconClass: "fi flaticon-dove",
    title: "Video & Photo Coverage",
    desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't.",
    duration: "1600",
    col: "col-lg-4 col-md-6 col-12",
  },
  {
    iconClass: "fi flaticon-dove",
    title: "Online Streaming Capabilities",
    desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't.",
    duration: "1800",
    col: "col-lg-4 col-md-6 col-12",
  },
];

const ServiceDetailsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="wpo-service-details-area section-padding-60 pt-0 pb-0">
      <div className="container">
        <div className="wpo-p-details-section">
          <div className="process-wrap">
            <div className="row">
              {services.map((service, index) => {
                const { ref, inView } = useInView({
                  threshold: 0,
                  triggerOnce: true,
                });

                return (
                  <div className={service.col} key={index} ref={ref}>
                    <div
                      className={`process-item ${inView ? "aos-animate" : ""}`}
                      data-aos="fade-up"
                      data-aos-delay={`${index * 100}`}
                      data-aos-duration={service.duration}
                    >
                      <div className="process-icon">
                        <i className={service.iconClass}></i>
                      </div>
                      <div className="process-text">
                        <h3>{service.title}</h3>
                        <p>{service.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsSection;
