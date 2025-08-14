import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "resume") {
      const file = files[0] || null;
      setFormData((prev) => ({ ...prev, resume: file }));

      // Toggle filled class for file input label
      if (file) {
        e.target.closest("label").classList.add("filled");
      } else {
        e.target.closest("label").classList.remove("filled");
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));

      // Toggle filled class for normal inputs
      if (value) {
        e.target.classList.add("filled");
      } else {
        e.target.classList.remove("filled");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    // Simulate form submission
    setTimeout(() => {
      setStatus({ loading: false, success: "Thank you", error: null });
      setFormData({
        name: "",
        email: "",
        phone: "",
        resume: null,
      });
      // Remove all filled classes after reset
      document
        .querySelectorAll(".form-control, label")
        .forEach((el) => el.classList.remove("filled"));
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
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        pattern="[0-9]{10}"
                        title="Enter 10 digit phone number"
                        required
                      />
                    </div>

                    <div>
                      <label style={{ cursor: "pointer" }}>
                        <span
                          style={{
                            background: "#f0f0f0",
                            padding: "6px 12px",
                            borderRadius: "4px",
                            marginRight: "10px",
                          }}
                        >
                          Choose file
                        </span>
                        <span
                          className={formData.resume ? "filled" : ""}
                          style={{ color: formData.resume ? "black" : "gray" }}
                        >
                          {formData.resume
                            ? formData.resume.name
                            : "Upload your resume"}
                        </span>
                        <input
                          type="file"
                          name="resume"
                          accept=".pdf,.doc,.docx"
                          onChange={handleChange}
                          required
                          style={{ display: "none" }}
                        />
                      </label>
                    </div>

                    <div className="submit-area">
                      <button
                        type="submit"
                        className=" theme-btn-s3 btn-style"
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
