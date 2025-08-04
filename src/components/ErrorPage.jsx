import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../assets/images/error-404.svg"; // Adjust path as needed
import Header from "./Header/Header";
const Error404 = () => {
  return (
    // start error-404-section
    <>
      <Header />
      <section className="error-404-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <div className="content clearfix">
                <div className="error">
                  <img
                    src={errorImg}
                    alt="404 Error"
                    className="img-fluid d-block mx-auto"
                    style={{ maxWidth: "500px" }}
                  />
                </div>
                <div className="error-message">
                  <h3>Oops! Page Not Found!</h3>
                  <p>
                    We’re sorry but we can’t seem to find the page you
                    requested. This might be because you have typed the web
                    address incorrectly.
                  </p>
                  <Link to="/" className="theme-btn-s4">
                    Back to home
                  </Link>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* end row */}
        </div>{" "}
        {/* end container */}
      </section>
    </>
  );
};

export default Error404;
