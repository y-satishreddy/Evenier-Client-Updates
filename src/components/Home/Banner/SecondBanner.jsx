import "./banner.css"; // Import your CSS
import { Link } from "react-scroll";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className="hero-section">
      {/* Gradient Overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <div className="container hero-content">
        <div className="row h-100">
          <div
            className="col-12 d-flex flex-column justify-content-end text-center pb-5"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <h1 className="display-6 mb-3 gilroy-font text-white">
              Planning Your Everlasting Memories
            </h1>
            <p className="fs-6 text-white">
              We bring your vision to life in ways that last far beyond the day.
            </p>
            {/* <div className="mb-4 text-center">
              <Link to="formSection" smooth={true} duration={500} offset={-70}>
                <button type="button" className="theme-btn-s5">
                  Enquire Now
                </button>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
