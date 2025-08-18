import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

import contactImg1 from "../../../assets/images/home-form/left.jpg";
import contactImg2 from "../../../assets/images/home-form/right.jpg";
import vector1 from "../../../assets/images/contact/1.png";
import vector2 from "../../../assets/images/contact/2.png";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventType: "",
    date: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      // Change URL to your API endpoint
      const res = await axios.post(
        "https://your-api-endpoint.com/contact",
        formData
      );
      if (res.status === 200) {
        setStatus({ loading: false, success: "Thank you", error: null });
        setFormData({
          name: "",
          email: "",
          eventType: "",
          date: "",
        });
      } else {
        throw new Error("Unexpected response");
      }
    } catch (error) {
      setStatus({
        loading: false,
        success: null,
        error: "Error occurred while sending. Please try again later.",
      });
    }
  };

  return (
    <section className="wpo-contact-section">
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col col-xl-4 col-lg-3 col-md-3 col-12">
            <div className="contact-img" data-aos="fade-right">
              <img src={contactImg1} alt="Contact Left" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
            <div className="wpo-contact-section-wrapper">
              <div className="wpo-contact-form-area" data-aos="zoom-in">
                <div className="wpo-section-title">
                  {/* <h4>Let’s bring your next event to life</h4> */}
                  <h2 className="gilroy-font">Enquire Now</h2>
                </div>
                <form onSubmit={handleSubmit} id="contact-form-main">
                  <div>
                    <input
                      type="text"
                      className="form-control gilroy-font"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control gilroy-font"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div>
                    <select
                      name="eventType"
                      className="form-control gilroy-font"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Event Type
                      </option>
                      <option>Weddings Events</option>
                      <option>Schools Events</option>
                      <option>Corporate Events</option>
                    </select>
                  </div>
                  <div className="date">
                    <input
                      className="form-control gilroy-font"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="submit-area">
                    <button
                      type="submit"
                      className="theme-btn-s3 gilroy-font"
                      disabled={status.loading}
                    >
                      {status.loading ? "Sending..." : "Send An Enquiry"}
                    </button>
                  </div>
                  <div className="clearfix error-handling-messages">
                    {status.success && (
                      <div id="success" className="gilroy-font">
                        {status.success}
                      </div>
                    )}
                    {status.error && (
                      <div id="error" className="gilroy-font">
                        {status.error}
                      </div>
                    )}
                  </div>
                </form>
              </div>

              {/* Decorative Vectors */}
              <div className="vector-1" data-aos="fade-up">
                <img src={vector1} alt="Vector Decoration 1" />
              </div>
              <div className="vector-2" data-aos="fade-down">
                <img src={vector2} alt="Vector Decoration 2" />
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="col col-xl-4 col-lg-3 col-md-3 col-12">
            <div className="contact-img" data-aos="fade-left">
              <img src={contactImg2} alt="Contact Right" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
