import React, { useState } from "react";

const FormModal = ({ setModalOpen }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1️⃣ Email validation
    if (!validateEmail(formData.email)) {
      alert("Invalid email");
      return;
    }

    // 2️⃣ Phone number validation (10 digits)
    if (formData.phone.length !== 10) {
      alert("Invalid phone number");
      return;
    }

    const today = new Date();
    const dob = new Date(formData.dob);
    if (dob > today) {
      alert("Invalid date of birth");
      return;
    }

    alert("Form submitted successfully!");
    console.log(formData);
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal")) {
      setModalOpen(false);
    }
  };

  return (
    <div className="modal" onClick={handleOutsideClick}>
      <div className="container">
        <div className="modal-content">
          <h2>Fill Details</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              name="dob"
              id="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
