import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutImg from "../../assets/images/about/6.jpg"; // adjust the path as needed

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  return (
    <section className="wpo-about-section section-padding-60">
      <div className="container">
        <div className="wpo-about-wrap">
          <div className="row">
            {/* Left Column: Image */}
            <div className="col-lg-6 col-md-12 col-12">
              <div
                className="wpo-about-item"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <div className="wpo-about-img">
                  <img
                    src={aboutImg}
                    alt="Loading"
                    className="rounded-3 img-fluid"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Text */}
            <div className="col-lg-6 col-md-12 col-12">
              <div
                className="wpo-about-text"
                data-aos="fade-right"
                data-aos-duration="1600"
              >
                <div>
                  <h4 className="gilroy-font">Why Choose Evenire?</h4>
                  <ul className="ml-25">
                    <li className="gilroy-font">15+ Years of Experience</li>
                    <li className="gilroy-font">
                      10,000+ Decor Projects Completed
                    </li>
                    <li className="gilroy-font">30+ Full-time Professionals</li>
                    <li className="gilroy-font">
                      Full-scale End-to-End Execution
                    </li>
                    <li className="gilroy-font">
                      Detailed and Driven by Passion
                    </li>
                    <li className="gilroy-font">
                      Strategic Partnerships with Venues
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
