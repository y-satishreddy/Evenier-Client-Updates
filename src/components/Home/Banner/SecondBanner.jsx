import slide4 from "../../../assets/images/banner/slider-22.jpg";
import "./banner.css";
import { Link } from "react-scroll";
const Banner = () => {
  return (
    <div className="banner">
      {/* Black overlay */}
      <div className="banner-overlay"></div>

      {/* Text and button */}
      <div className="banner-content">
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="gilroy-font text-white"
        >
          Planning Your Everlasting Memories
        </h2>
        <p data-aos="fade-up" data-aos-duration="1800" className="text-white">
          Let’s Make Your Day Memorable. Your Successful Wedding is Our Job.
        </p>
        <Link
          to="formSection"
          smooth={true}
          duration={500}
          offset={-90}
          spy={true}
          isDynamic={true}
        >
          <button
            className="theme-btn-s3 btn-style gilroy-font"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Enquiry Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
