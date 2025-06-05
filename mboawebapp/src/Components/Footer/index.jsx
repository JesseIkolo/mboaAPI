import React from "react";
import "./Footer.css";
import lo1 from '../../assets/lo1.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        
      </div>

      <div className="footer-middle">
        <div className="footer-column">
          <img src={lo1}/>
          <p>support@mboahost.com</p>
          <p>+237 694 438 421</p>
        </div>

        <div className="footer-column">
          <h3>Notre Application</h3>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="#about">Qu'est ce que c'est</a></li>
            <li><a href="#features">Fonctionnalités</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Besoin d'aide?</h3>
          <ul>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#faq">FAQs</a></li>
          </ul>
        </div>
      </div>

        <div className="copyright">
          <p>© 2025 Mboa Event, All Right Reserved</p>
          <a href="/terms">Termes et conditions</a>
        </div>
    </footer>
  );
};

export default Footer;