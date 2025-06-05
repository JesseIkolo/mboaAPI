import React, { useState } from "react";
import "./WaitingList.css";

const WaitingList = () => {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for signing up to our waiting list!");
    setFormData({
      lastName: "",
      firstName: "",
      email: "",
      phone: "",
    });
  };

  return (
    <section id="contact" className="waiting-list-section">
      <div className="group">
        <h1>Inscription à notre Waitinglist</h1>
        <p className="subtitle">Remplissez le formulaire ci-dessous.</p>
      </div>
      <form onSubmit={handleSubmit} className="waiting-list-form">
        <div className="form-row">
          <div className="form-group">
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Nom"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Prénom"
              required
            />
          </div>
        </div>

        <div className="form-row combined-row">
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email@mail.com"
              required
            />
          </div>

          <div className="separator">|</div>

          <div className="form-group">
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Numéro de Téléphone"
              required
            />
          </div>
        </div>

        <button type="submit" className="submit-button">
          Envoyer →
        </button>
      </form>
    </section>
  );
};

export default WaitingList;
