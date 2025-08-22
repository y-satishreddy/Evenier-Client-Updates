import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for React Router
import AOS from "aos";
import "aos/dist/aos.css";
import serviceImg1 from "../../../assets/images/service/weddingService.jpg"; // Adjust the path as needed
import serviceImg2 from "../../../assets/images/service/corporateService.jpg";
import serviceImg3 from "../../../assets/images/service/schoolService.jpg";

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  return (
    <section
      className="wpo-Service-section section-padding-60 bg-theme-home pt-0"
      id="Service"
    >
      <div className="container">
        <div className="wpo-section-title">
          {/* <h4>Our Services</h4> */}
          <h4>Our Services</h4>
          <h2 className="text-black">Tailored solutions for every occasion</h2>
        </div>
        <div className="wpo-Service-wrap ">
          <div className="row d-flex align-items-center justify-content-center">
            {/* Service 1 */}
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div
                className="wpo-Service-item"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="wpo-Service-img">
                  <img src={serviceImg1} alt="Wedding Events" />
                </div>
                <div className="wpo-Service-text">
                  <Link to="/wedding-events" className="gilroy-font">
                    Production
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div
                className="wpo-Service-item"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="200"
              >
                <div className="wpo-Service-img">
                  <img src={serviceImg2} alt="Corporate Events" />
                </div>
                <div className="wpo-Service-text">
                  <Link to="/corporate-events" className="gilroy-font">
                    Management
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            {/* <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div
                className="wpo-Service-item"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="400"
              >
                <div className="wpo-Service-img">
                  <img src={serviceImg3} alt="School Events" />
                </div>
                
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
