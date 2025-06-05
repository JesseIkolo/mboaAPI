import React from "react";
import "./Hero.css";
import mini from "../../assets/mini.svg";
import mini2 from "../../assets/mini2.png";
import ico from "../../assets/ico.svg";
import user from '../../assets/user.svg'
import { motion } from 'framer-motion';

const MboaEventsAbout = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  return (
    <div className="about-container">
      <section id="about" className="section">
      <div className="about-header">
        <h1>Mbo’a Events,</h1>
        <h2>Qu’est ce que c’est?</h2>
      </div>

      <div className="top-section">
        <motion.div
          className="events-card"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="events-content">
            <div className="text">
              <img src={ico} />
              <h3>Tout l’univers des <br/>événements en un clic</h3>
              <p>
              Découvre, organise et vis tous les événements qui comptent autour de toi. Qu’ils soient festifs, éducatifs, artistique, utiles pour la santé, on regroupe tout au même endroit.
              </p>
            </div>
            <img
              src={mini}
              alt="App"
              className="phone-mockup"
            />
          </div>
        </motion.div>

        <motion.div
          className="vision-card"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3>Notre Vision</h3>
          <p>Faire de chaque évènement une expérience partagée, et de chaque utilisateur un acteur de la vie. L’application aspire à devenir le carrefour numérique de la culture, de la santé, de la formation et du lifestyle. Un outil complet pour vivre, découvrir et connecter.</p>
          <button className="contact-btn">
            Contact <span className="arrow">→</span>
          </button>
        </motion.div>
      </div>

      <div className="bottom-section">
        <motion.div
          className="mission-card"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3>Notre Mission</h3>
          <p>Connecter les utilisateurs aux moments qui comptent et Promouvoir les initiatives locales grâce à une plateforme numérique accessible et attrayante. </p>
          <button className="contact-btn">
            Contact <span className="arrow">→</span>
          </button>
        </motion.div>

        <motion.div
          className="community-card"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="community-content">
            <div className="text">
              <img src={user} />
              <h3>Communauté</h3>
              <p>Retrouve des amis, construis, partage et profite de tes passions et événements préférés grâce à notre système de communauté intégré. </p>
            </div>
            <img
              src={mini2}
              alt="Communauté"
              className="phone-mockup"
            />
          </div>
        </motion.div>
      </div>
      </section>
    </div>
  );
};

export default MboaEventsAbout;
