import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutImg from "../../assets/images/about/5.jpg";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
      offset: 0, // start animation immediately when element enters viewport
      easing: "ease-in-out",
    });

    // 👇 This makes AOS run animations immediately on visible elements
    setTimeout(() => {
      AOS.refreshHard();
    }, 200);
  }, []);

  return (
    <>
      {/* About Section */}
      <section className="wpo-about-section section-padding-60 pb-0">
        <div className="container">
          <div className="wpo-about-wrap">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 col-12" data-aos="fade-left">
                <div className="wpo-about-item">
                  <div className="wpo-about-img">
                    <img src={aboutImg} alt="about" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12" data-aos="fade-right">
                <div className="wpo-about-text pt-0 pb-0 align-items-center">
                  <h4>
                    Welcome To Evenire <br />
                    All Your Exceptional Events
                  </h4>
                  <p>
                    We also bring the same passion and care to every kind of
                    gathering, from small-scale private events to large-scale
                    public events.
                  </p>
                  <p>
                    With over 15 years of experience, a passionate team of 30+
                    professionals, and more than 10,000 decor stories behind us,
                    we have learned that great events do not happen by chance,
                    they occur when every single detail is given the care it
                    deserves.
                  </p>
                  <p>
                    We never settle for ‘good enough’. We give you our full
                    energy, our complete attention, and our very best, from the
                    first conversation to the final applause.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Core Values Section */}
      <section className="section-padding-60 pb-0">
        <div className="container">
          {/* Vision & Mission */}
          <div className="row align-items-stretch mb-5">
            {/* Vision */}
            <div
              className="col-lg-6 col-md-12 mb-4 mb-lg-0"
              data-aos="fade-right"
            >
              <div className="p-4 shadow-sm wpo-about-text h-100 rounded border-left border-4 border-primary">
                <h2 className="wpo-about-wrap gilroy-font">Vision</h2>
                <p>
                  To be the most trusted event management company in India,
                  known for creativity, seamless execution, and heartfelt
                  experiences.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="col-lg-6 col-md-12" data-aos="fade-left">
              <div className="p-4 shadow-sm h-100 bg-white wpo-about-text rounded border-left border-4 border-success">
                <h2 className="mb-3 gilroy-font">Mission</h2>
                <p>
                  To craft events that feel like magic, grounded in planning,
                  powered by people, and inspired by your imagination.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="row">
            <div className="col-12" data-aos="fade-up">
              <div className="p-5 shadow-sm rounded wpo-about-text text-center">
                <h2 className="mb-4 gilroy-font">Our Core Values</h2>
                <div className="row justify-content-center wpo-about-text text-start">
                  <div className="col-md-6 col-lg-3 mb-3">
                    <p>Creativity with Purpose</p>
                  </div>
                  <div className="col-md-6 col-lg-3 mb-3">
                    <p>Commitment to Detail</p>
                  </div>
                  <div className="col-md-6 col-lg-3 mb-3">
                    <p>Trustworthy Partnerships</p>
                  </div>
                  <div className="col-md-6 col-lg-3 mb-3">
                    <p>Seamless Execution</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
