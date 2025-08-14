import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

// Images
import partner1 from "../../../assets/images/partners/1.png";
import partner2 from "../../../assets/images/partners/2.png";
import partner3 from "../../../assets/images/partners/3.png";
import partner4 from "../../../assets/images/partners/4.png";
import partner5 from "../../../assets/images/partners/5.png";

const Collaborators = () => {
  const partners = [partner1, partner2, partner3, partner4, partner5];

  // Repeat logos to simulate infinite carousel
  const repeatedPartners = [...partners, ...partners];

  return (
    <section className="wpo-partners-section section-padding-60">
      <div class="wpo-section-title text-dark">
        <h2 className="text-dark gilroy-font">Collaborators</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <div className="partners-slider">
              <Swiper
                modules={[Autoplay]}
                slidesPerView={5}
                loop={true}
                grabCursor={true}
                allowTouchMove={true}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                }}
                speed={3000}
                freeMode={true}
                breakpoints={{
                  320: { slidesPerView: 2 },
                  576: { slidesPerView: 3 },
                  768: { slidesPerView: 4 },
                  1024: { slidesPerView: 5 },
                }}
              >
                {repeatedPartners.map((partner, index) => (
                  <SwiperSlide key={index}>
                    <div className="grid">
                      <img src={partner} alt={`Partner ${index + 1}`} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborators;
