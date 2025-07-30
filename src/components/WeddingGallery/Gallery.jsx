import React from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "./Galler.css";

// Image imports
import img12 from "../../assets/images/portfolio/12.jpg";
import img13 from "../../assets/images/portfolio/13.jpg";
import img14 from "../../assets/images/portfolio/14.jpg";
import img15 from "../../assets/images/portfolio/15.jpg";
import img16 from "../../assets/images/portfolio/16.jpg";
import img17 from "../../assets/images/portfolio/17.jpg";

const PortfolioGallery = () => {
  React.useEffect(() => {
    NativeFancybox.bind("[data-fancybox='gallery']", {});
    return () => {
      NativeFancybox.unbind("[data-fancybox='gallery']");
    };
  }, []);

  return (
    <section className="gallery-section">
      <div className="gallery-row">
        {/* [1] */}
        <div className="gallery-col">
          <a href={img12} data-fancybox="gallery" className="image-wrapper">
            <img src={img12} alt="Gallery" />
            <div className="overlay">
              <span className="plus-icon">+</span>
            </div>
          </a>
        </div>

        {/* [2,3] */}
        <div className="gallery-col stacked">
          <a href={img13} data-fancybox="gallery" className="image-wrapper">
            <img src={img13} alt="Gallery" />
            <div className="overlay">
              <span className="plus-icon">+</span>
            </div>
          </a>

          <a href={img14} data-fancybox="gallery" className="image-wrapper">
            <img src={img14} alt="Gallery" />
            <div className="overlay">
              <span className="plus-icon">+</span>
            </div>
          </a>
        </div>

        {/* [4] */}
        <div className="gallery-col">
          <a href={img15} data-fancybox="gallery" className="image-wrapper">
            <img src={img15} alt="Gallery" />
            <div className="overlay">
              <span className="plus-icon">+</span>
            </div>
          </a>
        </div>

        {/* [5,6] */}
        <div className="gallery-col stacked">
          <a href={img16} data-fancybox="gallery" className="image-wrapper">
            <img src={img16} alt="Gallery" />
            <div className="overlay">
              <span className="plus-icon">+</span>
            </div>
          </a>

          <a href={img17} data-fancybox="gallery" className="image-wrapper">
            <img src={img17} alt="Gallery" />
            <div className="overlay">
              <span className="plus-icon">+</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;
