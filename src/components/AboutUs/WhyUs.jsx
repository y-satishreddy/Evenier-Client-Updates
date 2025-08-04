import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutImg from "../../assets/images/about/1.png"; // adjust the path as needed

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
                <div className="education-area ex-wiget">
                  <h2>Why Choose Evenire?</h2>
                  <ul>
                    <li>15+ Years of Experience</li>
                    <li>10,000+ Decor Projects Completed</li>
                    <li>30+ Full-time Professionals</li>
                    <li>Full-scale End-to-End Execution</li>
                    <li>Detailed and Driven by Passion</li>
                    <li>Strategic Partnerships with Venues</li>
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
