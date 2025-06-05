import React, { useState, useEffect } from "react";
import "./MboaEvent.css";
import s1 from "../../assets/s1.svg";
import s2 from "../../assets/s2.svg";
import lo from "../../assets/lo.png";
import svg1 from "../../assets/svg1.svg";

const MboaEvents = () => {
  const [isAppVisible, setIsAppVisible] = useState(false);
  const [animatePhones, setAnimatePhones] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Animation delay to show the app interface
    setTimeout(() => {
      setIsAppVisible(true);
    }, 1000);

    // Set phone animations
    setTimeout(() => setAnimatePhones(true), 100);

    // Close menu when resizing to desktop
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="mboa-container">
      <header className="mboa-header">
        <div className="mboa-logo-container">
          <div className="mboa-logo">
            <img src={lo} alt="Logo" className="logo-img" />
          </div>
          <div className="hamburger-menu" onClick={toggleMenu}>
            <div className={`bar ${menuOpen ? "active" : ""}`}></div>
            <div className={`bar ${menuOpen ? "active" : ""}`}></div>
            <div className={`bar ${menuOpen ? "active" : ""}`}></div>
          </div>
        </div>

        <nav className={`mboa-nav ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#home" className="active" onClick={closeMenu}>
                Accueil
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>
                Qu'est ce que c'est
              </a>
            </li>
            <li>
              <a href="#features" onClick={closeMenu}>
                Fonctionnalités
              </a>
            </li>
            <li>
              <a href="#faq" onClick={closeMenu}>
                Faq
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                Contactez-nous
              </a>
            </li>
          </ul>
          
          <button className="mboa-download-btn desktop-only1" onClick={closeMenu}>
          S'inscrire <span>→</span>
        </button>
        </nav> 

        <a href="#waiting-list" className="mboa-download-btn desktop-only">
          Rejoindre la communauté <span>→</span>
        </a>
      </header>

      <section id="home" className="section">
        <div className="mboa-content">
          <div className="mboa-left-content">
            <div className="mboa-banner">
              <p>
                Avec <span className="orange">Mbo'a Events</span>, trouve des
                évènements ndolé en 2 clics !
              </p>
            </div>

            <h2 className="mboa-title-animated">
              Tu veux organiser ou juste participer ? Tout se fait dans l'appli.
            </h2>

            <p className="mboa-description">
              Mbo'a Events est la plateforme Camerounaise qui t'aide à trouver
              des évènements locaux du moment à ne surtout pas rater. Tu veux
              sortir ? L'appli te montre direct ce qui se passe près de chez
              toi, sans te prendre la tête. Rejoins-nous maintenant et
              télécharge notre application mobile.
            </p>

            <div className="mboa-action-buttons">
              <a href="#contact"><button className="mboa-download-cta">
                S'inscrire sur la liste d'attente <span>→</span>
              </button></a>
              <button className="mboa-contact-btn">Contactez-nous</button>
            </div>

            {/*<div className="mboa-store-links">
              <a href="#" className="store-link">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                />
              </a>
              <a href="#" className="store-link">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="App Store"
                />
              </a>
            </div>*/}
          </div>

          {/* Right Side with Phones and Circles */}
          <div className="mboa-right-content">
            <div className="red-circle"></div>
            <div className="blue-circle"></div>
            <div className={`phone-group ${animatePhones ? "animate" : ""}`}>
              <img src={s1} alt="Phone 1" className="phone-img1" />
              <img src={svg1} alt="Phone 2" className="phone-img2" />
              <img src={s2} alt="Phone 3" className="phone-img3" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MboaEvents;
