import React, { useState, useEffect } from "react";
import "./Faq.css";
import fomo from "../assets/fomo.png";
import peru from "../assets/peru.png";
import john from "../assets/john.png";
import mo from "../assets/mo.png";
import yes from "../assets/yes.png";
import ana from "../assets/ana.png";
import yo from "../assets/yo.png";

const testimonials = [
  {
    id: 1,
    name: "Isaac Fomo",
    role: "Étudiant à Douala",
    image: fomo,
    testimonial:
      "Mbo'a Events me permet de retrouver facilement les événements et d'y inviter toute ma communauté. Une vraie bénédiction !",
  },
  {
    id: 2,
    name: "Marie Tchamba",
    role: "Designer à Yaoundé",
    image: peru,
    testimonial:
      "Grâce à Mbo'a Events, j'ai pu développer mon réseau professionnel et participer à des événements enrichissants.",
  },
  {
    id: 3,
    name: "Jean Ekambi",
    role: "Entrepreneur à Douala",
    image: john,
    testimonial:
      "Application incontournable pour tous les événements culturels et professionnels du Cameroun!",
  },
  {
    id: 4,
    name: "Sarah Ndongo",
    role: "Influenceuse à Douala",
    image: mo,
    testimonial:
      "La meilleure plateforme pour découvrir et partager des événements. Interface intuitive et communauté dynamique.",
  },
  {
    id: 5,
    name: "Paul Mbarga",
    role: "Musicien à Kribi",
    image: yes,
    testimonial:
      "Mbo'a Events a transformé ma façon de promouvoir mes concerts et d'attirer un nouveau public.",
  },
  {
    id: 6,
    name: "Carine Ateba",
    role: "Étudiante à Buea",
    image: ana,
    testimonial:
      "Cette application simplifie tellement l'organisation de mes sorties et rencontres étudiantes!",
  },
  {
    id: 7,
    name: "Thomas Engo",
    role: "Développeur à Douala",
    image: yo,
    testimonial:
      "En tant que développeur, j'apprécie la fluidité et l'ergonomie de Mbo'a Events. Un excellent travail!",
  },
];

const CircleTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Rotation automatique de l'index actif
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="testimonials-container">
      <h1 className="title">Ils parlent de nous !</h1>
      <p className="subtitle">
        Ils ont testé, ils ont adoré ! Découvrez ce que notre communauté pense
        de Mbo'a Events. Des expériences partagées, des avis sincères
      </p>

      <div className="solar-system">
        {/* Élément central fixe (soleil) */}
        <div className="center-content">
          <div className="quote-icon">"</div>
          <p className="testimonial-text">
            {testimonials[activeIndex].testimonial}
          </p>
          <h3 className="testimonial-name">{testimonials[activeIndex].name}</h3>
          <p className="testimonial-role">{testimonials[activeIndex].role}</p>
        </div>

        {/* Les orbites et avatars (planètes) */}
        <div className="orbit orbit-inner">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`planet planet-inner ${
                index === activeIndex % 3 ? "active-planet" : ""
              }`}
              style={{ "--planet-index": index }}
              onClick={() => handleDotClick(index)}
            >
              <img
                src={testimonial.image}
                alt={`Avatar de ${testimonial.name}`}
                className="avatar-image"
              />
            </div>
          ))}
        </div>

        <div className="orbit orbit-outer">
          {testimonials.slice(3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`planet planet-outer ${
                index + 3 === activeIndex ? "active-planet" : ""
              }`}
              style={{ "--planet-index": index }}
              onClick={() => handleDotClick(index + 3)}
            >
              <img
                src={testimonial.image}
                alt={`Avatar de ${testimonial.name}`}
                className="avatar-image"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="navigation-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CircleTestimonials;
