import LoaderImage from "../../assets/images/preloader.svg";
const Loader = () => {
  return (
    <div className="preloader">
      <div className="vertical-centered-box">
        <div className="content">
          <div className="loader-circle"></div>
          <div className="loader-line-mask">
            <div className="loader-line"></div>
          </div>
          <img src={LoaderImage} alt="Loading..." />
        </div>
      </div>
    </div>
  );
};

export default Loader;
