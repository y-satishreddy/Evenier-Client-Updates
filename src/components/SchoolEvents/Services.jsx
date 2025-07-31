import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useInView } from "react-intersection-observer";

import StageSetupImg from "../../assets/icons/school/svgs/AVAndLightingSolutions.svg";
import BarricadesEntryImg from "../../assets/icons/school/svgs/BarricadesAndEntryManagement.svg";
import AvLightingImg from "../../assets/icons/school/svgs/CoordinationAndAnchoring.svg";
import CoordinationAnchoringImg from "../../assets/icons/school/svgs/StageSetup.svg";

const services = [
  {
    icon: StageSetupImg,
    title: (
      <>
        Stage <br /> Setup
      </>
    ),
    desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't.",
    delay: 0,
    duration: 1000,
  },
  {
    icon: BarricadesEntryImg,
    title: (
      <>
        Barricades & <br /> Entry Management
      </>
    ),
    desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't.",
    delay: 100,
    duration: 1200,
  },
  {
    icon: AvLightingImg,
    title: (
      <>
        AV & Lighting <br /> Solutions
      </>
    ),
    desc: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't.",
    delay: 200,
    duration: 1400,
  },
  {
    icon: CoordinationAnchoringImg,
    title: (
      <>
        Coordination & <br /> Anchoring
      </>
    ),
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
                        <img
                          src={service.icon}
                          alt="service-icon"
                          className="new-icons"
                        />
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

export default StageSetupSection;
