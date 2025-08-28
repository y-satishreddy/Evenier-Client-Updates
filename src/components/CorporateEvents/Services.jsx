import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import LightAndSoundDesign from "../../assets/icons/corporate/svgs/LightAndSoundDesign.svg";
import OnlineStreamingCapabilities from "../../assets/icons/corporate/svgs/OnlineStreamingCapabilities.svg";
import ScreenSetupAndSpeakerSystems from "../../assets/icons/corporate/svgs/ScreenSetupAndSpeakerSystems.svg";
import VenueSourcing from "../../assets/icons/corporate/svgs/VenueSourcing.svg";
import VideoAndPhotoCoverage from "../../assets/icons/corporate/svgs/VideoAndPhotoCoverage.svg";
import BrandingCustomTheming from "../../assets/icons/corporate/svgs/BrandingCustomTheming.svg";
import ScheduleItineraryPlanning from "../../assets/icons/corporate/svgs/ScheduleItineraryPlanning.svg";
import StageSetupImg from "../../assets/icons/school/svgs/StageSetup.svg";
import BarricadesEntryImg from "../../assets/icons/school/svgs/BarricadesAndEntryManagement.svg";
import AvLightingImg from "../../assets/icons/school/svgs/AVAndLightingSolutions.svg";
import CoordinationAnchoringImg from "../../assets/icons/school/svgs/CoordinationAndAnchoring.svg";

const ServiceDetailsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      startEvent: "DOMContentLoaded", // ensures it fires on load
      offset: 0, // trigger when the element is at the bottom of viewport
    });
  }, []);

  return (
    <section className="wpo-service-details-area section-padding-60 pt-0 pb-6">
      <div className="container">
        <div className="wpo-p-details-section">
          <div className="process-wrap">
            <div className="row g-4">
              {/* Card 1 */}
              <div
                className="col-lg-4 col-md-6 col-12"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <div className="process-item h-100">
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
              <div
                className="col-lg-4 col-md-6 col-12"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="process-item h-100">
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
              <div
                className="col-lg-4 col-md-6 col-12"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="process-item h-100">
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
              <div
                className="col-lg-4 col-md-6 col-12"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="process-item h-100">
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
              <div
                className="col-lg-4 col-md-6 col-12"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="process-item h-100">
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
              <div
                className="col-lg-4 col-md-6 col-12"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="process-item h-100">
                  <div className="process-icon">
                    <img
                      src={ScheduleItineraryPlanning}
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
              <div
                className="col-lg-4 col-md-6 col-12"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="process-item h-100">
                  <div className="process-icon">
                    <img
                      src={BrandingCustomTheming}
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

              {/* Extra Cards */}
              <div
                className="col-lg-4 col-md-6 col-12"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <div className="process-item h-100">
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

              <div
                className="col-lg-4 col-md-6 col-12"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <div className="process-item h-100">
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

              <div
                className="col-lg-4 col-md-6 col-12"
                data-aos="fade-up"
                data-aos-delay="900"
              >
                <div className="process-item h-100">
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

              <div
                className="col-lg-4 col-md-6 col-12"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                <div className="process-item h-100">
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

export default ServiceDetailsSection;
