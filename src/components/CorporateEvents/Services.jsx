import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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

  return (
    <section className="wpo-service-details-area section-padding-60 pt-0 pb-0">
      <div className="container">
        <div className="wpo-p-details-section">
          <div className="process-wrap">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div
                  className="process-item"
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                >
                  <div className="process-icon">
                    <img
                      src={VenueSourcing}
                      alt="Venue Sourcing"
                      className="new-icons"
                    />
                  </div>
                  <div className="process-text">
                    <h3>Venue Sourcing</h3>
                    <p>
                      If you are going to use a passage of Lorem Ipsum, you need
                      to be sure there isn't.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-12">
                <div
                  className="process-item"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1200"
                >
                  <div className="process-icon">
                    <img
                      src={LightAndSoundDesign}
                      alt="Light & Sound Design"
                      className="new-icons"
                    />
                  </div>
                  <div className="process-text">
                    <h3>Light & Sound Design</h3>
                    <p>
                      If you are going to use a passage of Lorem Ipsum, you need
                      to be sure there isn't.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12">
                <div
                  className="process-item"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1400"
                >
                  <div className="process-icon">
                    <img
                      src={ScreenSetupAndSpeakerSystems}
                      alt="Screen Setup & Speaker Systems"
                      className="new-icons"
                    />
                  </div>
                  <div className="process-text">
                    <h3>Screen Setup & Speaker Systems</h3>
                    <p>
                      If you are going to use a passage of Lorem Ipsum, you need
                      to be sure there isn't.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12">
                <div
                  className="process-item"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1600"
                >
                  <div className="process-icon">
                    <img
                      src={VideoAndPhotoCoverage}
                      alt="Video & Photo Coverage"
                      className="new-icons"
                    />
                  </div>
                  <div className="process-text">
                    <h3>Video & Photo Coverage</h3>
                    <p>
                      If you are going to use a passage of Lorem Ipsum, you need
                      to be sure there isn't.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12">
                <div
                  className="process-item"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="1800"
                >
                  <div className="process-icon">
                    <img
                      src={OnlineStreamingCapabilities}
                      alt="Online Streaming Capabilities"
                      className="new-icons"
                    />
                  </div>
                  <div className="process-text">
                    <h3>Online Streaming Capabilities</h3>
                    <p>
                      If you are going to use a passage of Lorem Ipsum, you need
                      to be sure there isn't.
                    </p>
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
