import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulate submission
    setStatus({ loading: true, success: null, error: null });

    setTimeout(() => {
      // Simulate success
      setStatus({ loading: false, success: "Thank you", error: null });
      // Reset form
      setFormData({ name: "", email: "", service: "", message: "" });
    }, 1500);
  };

  return (
    <section className="wpo-contact-section-s5 section-padding" id="rsvp">
      <div className="container">
        <div className="row align-items-center">
          <div className="col col-lg-10 col-md-12 col-12">
            <div className="wpo-contact-section-wrapper">
              <div className="wpo-contact-section-inner">
                <div className="wpo-contact-form-area">
                  <div className="wpo-section-title">
                    <h4>Loreim Ipsum</h4>
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
                        name="service"
                        className="form-control last"
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
                        className="theme-btn"
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
