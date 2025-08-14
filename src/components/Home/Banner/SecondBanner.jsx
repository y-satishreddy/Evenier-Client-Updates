import slide4 from "../../../assets/images/banner/slider-22.jpg";
import "./banner.css";

const Banner = ({ onEnquiryClick }) => {
  return (
    <div className="banner">
      {/* Black overlay */}
      <div className="banner-overlay"></div>

      {/* Text and button */}
      <div className="banner-content">
        <h3 className="banner-title text-white gilroy-font">
          Make Your Dream Wedding <br /> Come True with Us
        </h3>

        <button
          className="theme-btn-s3 btn-style gilroy-font"
          onClick={onEnquiryClick}
        >
          Enquiry Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
