import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useInView } from "react-intersection-observer";

import LightAndSoundDesign from "../../assets/icons/corporate/svgs/LightAndSoundDesign.svg";
import OnlineStreamingCapabilities from "../../assets/icons/corporate/svgs/OnlineStreamingCapabilities.svg";
import ScreenSetupAndSpeakerSystems from "../../assets/icons/corporate/svgs/ScreenSetupAndSpeakerSystems.svg";
import VenueSourcing from "../../assets/icons/corporate/svgs/VenueSourcing.svg";
import VideoAndPhotoCoverage from "../../assets/icons/corporate/svgs/VideoAndPhotoCoverage.svg";

const ServiceDetailsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  // Define individual refs and visibility states
  const [ref1, inView1] = useInView({ threshold: 0, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0, triggerOnce: true });
  const [ref3, inView3] = useInView({ threshold: 0, triggerOnce: true });
  const [ref4, inView4] = useInView({ threshold: 0, triggerOnce: true });
  const [ref5, inView5] = useInView({ threshold: 0, triggerOnce: true });
  const [ref6, inView6] = useInView({ threshold: 0, triggerOnce: true });
  const [ref7, inView7] = useInView({ threshold: 0, triggerOnce: true });

  return (
    <section className="wpo-service-details-area section-padding-60 pt-0 pb-6">
      <div className="container">
        <div className="wpo-p-details-section">
          <div className="process-wrap">
            <div className="row g-4">
              {/* Card 1 */}
              <div className="col-lg-4 col-md-6 col-12" ref={ref1}>
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
                      src={VenueSourcing}
                      alt="Venue Sourcing"
                      className="new-icons w-15"
                    />
                  </div>
                  <div className="process-text">
                    <h3>Venue Sourcing</h3>
                    <p>Sourcing venues that match your vision.</p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-lg-4 col-md-6 col-12" ref={ref2}>
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
                      src={LightAndSoundDesign}
                      alt="Light & Sound Design"
                      className="new-icons w-15"
                    />
                  </div>
                  <div className="process-text">
                    <h3>Light & Sound Design</h3>
                    <p>Creating ambience with curated light and sound.</p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-lg-4 col-md-6 col-12" ref={ref3}>
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
                      src={ScreenSetupAndSpeakerSystems}
                      alt="Screen Setup & Speaker Systems"
                      className="new-icons w-15"
                    />
                  </div>
                  <div className="process-text">
                    <h3>Screen Setup & Speaker Systems</h3>
                    <p>
                      High-quality visual and sound setups, seamlessly
                      installed.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="col-lg-4 col-md-6 col-12" ref={ref4}>
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
                      src={VideoAndPhotoCoverage}
                      alt="Video & Photo Coverage"
                      className="new-icons w-15"
                    />
                  </div>
                  <div className="process-text">
                    <h3>Video & Photo Coverage</h3>
                    <p>
                      Telling your company’s story through every special shot.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 5 */}
              <div className="col-lg-4 col-md-6 col-12" ref={ref5}>
                <div
                  className={`process-item h-100 ${
                    inView5 ? "aos-animate" : ""
                  }`}
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="1800"
                >
                  <div className="process-icon">
                    <img
                      src={OnlineStreamingCapabilities}
                      alt="Online Streaming Capabilities"
                      className="new-icons w-15"
                    />
                  </div>
                  <div className="process-text">
                    <h3>Online Streaming Capabilities</h3>
                    <p>Live-streaming your sessions for future reference.</p>
                  </div>
                </div>
              </div>

              {/* Card 6 */}
              <div className="col-lg-4 col-md-6 col-12" ref={ref6}>
                <div
                  className={`process-item h-100 ${
                    inView6 ? "aos-animate" : ""
                  }`}
                  data-aos="fade-up"
                  data-aos-delay="500"
                  data-aos-duration="1800"
                >
                  <div className="process-icon">
                    <img
                      src={VideoAndPhotoCoverage}
                      alt="Schedule & Itinerary Planning"
                      className="new-icons w-15"
                    />
                  </div>
                  <div className="process-text">
                    <h3>Schedule & Itinerary Planning</h3>
                    <p>Planning smooth timelines for every event.</p>
                  </div>
                </div>
              </div>

              {/* Card 7 */}
              <div className="col-lg-4 col-md-6 col-12" ref={ref7}>
                <div
                  className={`process-item h-100 ${
                    inView7 ? "aos-animate" : ""
                  }`}
                  data-aos="fade-up"
                  data-aos-delay="600"
                  data-aos-duration="1800"
                >
                  <div className="process-icon">
                    <img
                      src={VideoAndPhotoCoverage}
                      alt="Branding & Custom Theming"
                      className="new-icons w-15"
                    />
                  </div>
                  <div className="process-text">
                    <h3>Branding & Custom Theming</h3>
                    <p>Personalised themes that reflect your unique style.</p>
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

export default ServiceDetailsSection;
