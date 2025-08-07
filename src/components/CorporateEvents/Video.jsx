import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ctaImage from "../../assets/images/cta4.jpg"; // update path as per your project
import { Link } from "react-router-dom";
const VideoSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section className="wpo-video-section-s2 section-padding-60 pt-0">
        <h2 className="hidden">some</h2>
        <div className="container">
          <div className="video-wrap" data-aos="zoom-in">
            <img src={ctaImage} alt="video preview" />
            <a
              href="https://www.youtube.com/embed/ZpeFEBMRCyM"
              className="video-btn"
              data-type="iframe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fi flaticon-play"></i>
            </a>
          </div>
        </div>
      </section>
      <div className="d-flex justify-content-center align-items-center">
        <Link to="/corporate-gallery" className="theme-btn-s4">
          View Gallery
        </Link>
      </div>
      <br />
    </>
  );
};

export default VideoSection;
