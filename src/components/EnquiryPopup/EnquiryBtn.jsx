import React, { useState } from "react";
import "./EnquiryBtn.css";

const EnquiryPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  // Open popup
  const handleOpen = () => setIsOpen(true);

  // Close popup
  const handleClose = () => setIsOpen(false);

  // Handle overlay click
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("popup-overlay")) {
      handleClose();
    }
  };

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
    handleClose();
  };

  return (
    <>
      {/* Sticky Button */}
      <div className="enquiry-btn" onClick={handleOpen}>
        Enquire Now
      </div>

      {/* Popup Overlay */}
      {isOpen && (
        <div className="popup-overlay" onClick={handleOverlayClick}>
          <div className="popup">
            <span className="close-btn" onClick={handleClose}>
              &times;
            </span>
            <h4 className="gilroy-font">Have a question?</h4>
            <form
              className="contact-validation-active"
              id="contact-form-main"
              onSubmit={handleSubmit}
            >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
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
                  <option value="wedding">Wedding Events</option>
                  <option value="corporate">Corporate Events</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <input
                  type="text"
                  name="message"
                  placeholder="Message"
                  className="form-control"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="submit-area">
                <button type="submit" className="theme-btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EnquiryPopup;
