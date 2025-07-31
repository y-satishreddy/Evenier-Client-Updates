import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useInView } from "react-intersection-observer";

const services = [
  {
    iconClass: "fi flaticon-dove",
    title: "Stage <br/>Setup",
    desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't.",
    delay: 0,
    duration: 1000,
  },
  {
    iconClass: "fi flaticon-edit",
    title: "Barricades & <br/>Entry Managemen",
    desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't.",
    delay: 100,
    duration: 1200,
  },
  {
    iconClass: "fi flaticon-wedding",
    title: "AV & Lighting <br/>Solutions",
    desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't.",
    delay: 200,
    duration: 1400,
  },
  {
    iconClass: "fi flaticon-dove",
    title: "Coordination & <br/> Anchoring",
    desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't.",
    delay: 300,
    duration: 1600,
  },
];

const StageSetupSection = () => {
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
                  <div
                    className="col-lg-3 col-md-6 col-12"
                    key={index}
                    ref={ref}
                  >
                    <div
                      className={`process-item ${inView ? "aos-animate" : ""}`}
                      data-aos="fade-up"
                      data-aos-delay={service.delay}
                      data-aos-duration={service.duration}
                    >
                      <div className="process-icon">
                        <i className={service.iconClass}></i>
                      </div>
                      <div className="process-text">
                        <h3
                          dangerouslySetInnerHTML={{ __html: service.title }}
                        />
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

export default StageSetupSection;
