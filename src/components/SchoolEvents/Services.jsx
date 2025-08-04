import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useInView } from "react-intersection-observer";

import StageSetupImg from "../../assets/icons/school/svgs/StageSetup.svg";
import BarricadesEntryImg from "../../assets/icons/school/svgs/BarricadesAndEntryManagement.svg";
import AvLightingImg from "../../assets/icons/school/svgs/AVAndLightingSolutions.svg";
import CoordinationAnchoringImg from "../../assets/icons/school/svgs/CoordinationAndAnchoring.svg";

const StageSetupSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const [ref1, inView1] = useInView({ threshold: 0, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0, triggerOnce: true });
  const [ref3, inView3] = useInView({ threshold: 0, triggerOnce: true });
  const [ref4, inView4] = useInView({ threshold: 0, triggerOnce: true });

  return (
    <section className="wpo-service-details-area section-padding-60 pt-0 pb-6">
      <div className="container">
        <div className="wpo-p-details-section">
          <div className="process-wrap">
            <div className="row g-4">
              {/* Card 1 */}
              <div className="col-lg-6 col-md-6 col-12" ref={ref1}>
                <div
                  className={`process-item h-100 ${
                    inView1 ? "aos-animate" : ""
                  }`}
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                >
                  <div className="process-icon">
                    <img
                      src={StageSetupImg}
                      alt="service-icon"
                      className="new-icons w-10"
                    />
                  </div>
                  <div className="process-text">
                    <h3>
                      Stage <br /> Setup
                    </h3>
                    <p>Designing picture-perfect stages for key moments.</p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-lg-6 col-md-6 col-12" ref={ref2}>
                <div
                  className={`process-item h-100 ${
                    inView2 ? "aos-animate" : ""
                  }`}
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1200"
                >
                  <div className="process-icon">
                    <img
                      src={BarricadesEntryImg}
                      alt="service-icon"
                      className="new-icons w-10"
                    />
                  </div>
                  <div className="process-text">
                    <h3>
                      Barricades & <br /> Entry Management
                    </h3>
                    <p>Managing secure and seamless guest flow systems.</p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-lg-6 col-md-6 col-12" ref={ref3}>
                <div
                  className={`process-item h-100 ${
                    inView3 ? "aos-animate" : ""
                  }`}
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1400"
                >
                  <div className="process-icon">
                    <img
                      src={AvLightingImg}
                      alt="service-icon"
                      className="new-icons w-10"
                    />
                  </div>
                  <div className="process-text">
                    <h3>
                      AV & Lighting <br /> Solutions
                    </h3>
                    <p>Advanced audio-visual and lighting for every segment.</p>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="col-lg-6 col-md-6 col-12" ref={ref4}>
                <div
                  className={`process-item h-100 ${
                    inView4 ? "aos-animate" : ""
                  }`}
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1600"
                >
                  <div className="process-icon">
                    <img
                      src={CoordinationAnchoringImg}
                      alt="service-icon"
                      className="new-icons w-10"
                    />
                  </div>
                  <div className="process-text">
                    <h3>
                      Coordination & <br /> Anchoring
                    </h3>
                    <p>Hosting and managing your day with professionalism.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StageSetupSection;
