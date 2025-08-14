import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    eventLocation: "",
    eventDate: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Dynamically toggle filled class
    if (value) {
      e.target.classList.add("filled");
    } else {
      e.target.classList.remove("filled");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    setTimeout(() => {
      setStatus({ loading: false, success: "Thank you", error: null });
      setFormData({
        name: "",
        email: "",
        service: "",
        budget: "",
        eventLocation: "",
        eventDate: "",
        message: "",
      });
      document
        .querySelectorAll(".form-control")
        .forEach((el) => el.classList.remove("filled")); // Reset colors
    }, 1500);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <section className="wpo-contact-section-s5 section-padding" id="rsvp">
      <div className="container">
        <div className="row align-items-center">
          <div className="col col-lg-10 col-md-12 col-12">
            <div className="wpo-contact-section-wrapper">
              <div className="wpo-contact-section-inner">
                <div className="wpo-contact-form-area">
                  <div className="wpo-section-title">
                    <h4 className="gilroy-font">Have a question?</h4>
                  </div>
                  <form onSubmit={handleSubmit} id="contact-form-main">
                    <div>
                      <input
                        type="text"
                        className="form-control"
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
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                      />
                    </div>

                    <div>
                      <select
                        name="budget"
                        className="form-control"
                        value={formData.budget}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>
                          Select Budget
                        </option>
                        <option>Below ₹50,000</option>
                        <option>₹50,000 - ₹1,00,000</option>
                        <option>₹1,00,000 - ₹2,00,000</option>
                        <option>Above ₹2,00,000</option>
                      </select>
                    </div>

                    <div>
                      <select
                        name="service"
                        className="form-control"
                        value={formData.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>
                          Select Service
                        </option>
                        <option>Wedding Events</option>
                        <option>Corporate Events</option>
                        <option>School Events</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <input
                        type="text"
                        className="form-control"
                        name="eventLocation"
                        value={formData.eventLocation}
                        onChange={handleChange}
                        placeholder="Event Location"
                        required
                      />
                    </div>

                    <div>
                      <input
                        type="date"
                        className="form-control"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        min={today}
                        onKeyDown={(e) => e.preventDefault()}
                        onClick={(e) => e.target.showPicker?.()}
                        style={{
                          outline: "none",
                          backgroundColor: "transparent",
                          boxShadow: "none",
                        }}
                        required
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        className="form-control"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Type here message"
                        required
                      />
                    </div>

                    <div className="submit-area">
                      <button
                        type="submit"
                        className="theme-btn-s3 btn-style"
                        disabled={status.loading}
                      >
                        Submit
                      </button>
                      {status.loading && (
                        <div id="c-loader">
                          <i className="ti-reload ti-spin"></i>
                        </div>
                      )}
                    </div>

                    <div className="clearfix error-handling-messages">
                      {status.success && (
                        <div id="success">{status.success}</div>
                      )}
                      {status.error && <div id="error">{status.error}</div>}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
