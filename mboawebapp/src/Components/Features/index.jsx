import React, { useEffect, useState } from "react";
import "./Feature.css";
import Creation1 from "../../assets/Creation1.png"; // Replace with your actual phone images
import Creation2 from "../../assets/Creation2.png";
import girl from "../../assets/girl.svg"; // Replace with your actual avatar images
import many from "../../assets/many.svg";
import hmmm from "../../assets/hmmm.svg";
import koc from "../../assets/koc.png";
import communaute1 from "../../assets/communaute1.png";
import communaute2 from "../../assets/communaute2.png";
import Catalogue1 from "../../assets/Catalogue1.png";
import Catalogue2 from "../../assets/Catalogue2.png";
import Abonnement1 from "../../assets/Abonnement1.png";
import Abonnement2 from "../../assets/Abonnement2.png";
import Statistique1 from "../../assets/Statistique1.png";
import Statistique2 from "../../assets/Statistique2.png";
import svg1 from "../../assets/svg1.svg";
import s2 from "../../assets/s2.svg";

const MboaFeatures = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set animation after component mounts
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  }, []);

  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsAnimated(true);
  }, []);

  return (
    <div className="features-container">
      <section id="features" className="section">
        <div className="features-section">
          {/* Section header */}
          <div className="features-header">
            <span className="features-tag">Fonctionnalités</span>
            <h2 className="features-title">
              Découvrez nos différentes
              <br />
              fonctionnalités
            </h2>
          </div>

          {/* Feature content */}
          <div className={`features-content ${isVisible ? "visible" : ""}`}>
            {/* Left side - Text content */}
            <div className="features-text-content">
              <div className="feature-highlight">
                <div className="highlight-marker"></div>
                <div className="highlight-content">
                  <h3 className="feature-title">
                    Création et partage de vos évènements
                  </h3>
                  <p className="feature-description">
                    L'utilisateur a la possibilité de créer, personnaliser et
                    partager ses évènements en mode public ou privé afin de
                    promouvoir les initiatives locales.
                  </p>
                  <div className="followers-indautor">
                    <div className="avatar-group">
                      <img src={girl} alt="User" className="avatar" />
                      <img src={many} alt="User" className="avatar" />
                      <img src={hmmm} alt="User" className="avatar" />
                    </div>
                    <span className="followers-count">
                      +20 personnes suivent
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Phone mockups */}
            <div className="features-mockup">
              <div className="circle-decoration"></div>
              <div className="blue-dot"></div>
              <div className="phone-container">
                <img
                  src={Creation1}
                  alt="App Feature"
                  className="phone-image phone-left"
                />
                <img
                  src={Creation2}
                  alt="App Feature"
                  className="phone-image phone-right"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="community-container">
          <div className="content-wrapper">
            <div className={`phones-container ${isAnimated ? "animated" : ""}`}>
              {/* Left phone image - will be replaced with actual image */}
              <div className="phone-placeholder left-phone">
                <img src={communaute1} />
              </div>

              {/* Right phone image - will be replaced with actual image */}
              <div className="phone-placeholder right-phone">
                <img src={communaute2} />
              </div>
            </div>

            <div className={`text-content ${isAnimated ? "animated" : ""}`}>
              <h1>Construction d'une communauté</h1>
              <p>
                Tout le monde peut bâtir, élargir et animer une communauté
                d'amis autour de leurs événements marquants et des moments
                inoubliables.
              </p>

              <div className="share-card">
                <img src={koc} alt="Event icon" className="event-icon" />
                <div className="share-text">
                  <h4>Partager cet événement</h4>
                  <p>KO-C nouvelle tournée</p>
                </div>
                <div className="share-options">
                  <div className="share-option whatsapp">
                    <svg width="20" height="20" viewBox="0 0 24 24">
                      <path
                        d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"
                        fill="#25D366"
                      />
                    </svg>
                  </div>
                  <div className="share-option telegram">
                    <svg width="20" height="20" viewBox="0 0 24 24">
                      <path
                        d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"
                        fill="#0088cc"
                      />
                    </svg>
                  </div>
                  <div className="share-option facebook">
                    <svg width="20" height="20" viewBox="0 0 24 24">
                      <path
                        d="M17 2v4h-2c-.69 0-1 .81-1 1.5V10h3v4h-3v8h-4v-8H7v-4h3V6c0-2.21 1.79-4 4-4h3z"
                        fill="#1877F2"
                      />
                    </svg>
                  </div>
                  <div className="share-option more">
                    <svg width="20" height="20" viewBox="0 0 24 24">
                      <path
                        d="M12 16a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2z"
                        fill="#444"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="highlight-marke"></div>
          </div>
        </div>
        <div className="features-section">
          <div className={`features-content ${isVisible ? "visible" : ""}`}>
            {/* Left side - Text content */}
            <div className="features-text-content">
              <div className="feature-highlight">
                <div className="highlight-marker"></div>
                <div className="highlight-content">
                  <h3 className="feature-title">
                    Naviguation dans le catalogue
                  </h3>
                  <p className="feature-description">
                    Parcours facilement notre catalogue dynamique et découvre
                    des coins sympas enjoy ta life
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Phone mockups */}
            <div className="features-mockup">
              <div className="circle-decoration"></div>
              <div className="blue-dot"></div>
              <div className="phone-container">
                <img
                  src={Catalogue1}
                  alt="App Feature"
                  className="phone-image phone-left"
                />
                <img
                  src={Catalogue2}
                  alt="App Feature"
                  className="phone-image phone-right"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="community-container">
          <div className="content-wrapper">
            <div className={`phones-container ${isAnimated ? "animated" : ""}`}>
              {/* Left phone image - will be replaced with actual image */}
              <div className="phone-placeholder left-phone">
                <img src={Abonnement1} />
              </div>

              {/* Right phone image - will be replaced with actual image */}
              <div className="phone-placeholder right-phone">
                <img src={Abonnement2} />
              </div>
            </div>

            <div className={`text-content ${isAnimated ? "animated" : ""}`}>
              <h1>Visualisation des statistiques</h1>
              <p>
                Consulte en temps réel les vues, participations et interactions
                sur tes événements. Pilote ta visibilité et améliore ton
                organisation en un coup d’œil.
              </p>
            </div>
            <div className="highlight-marke"></div>
          </div>
          <div className="background-circle"></div>
        </div>
        <div className="features-section">
          <div className={`features-content ${isVisible ? "visible" : ""}`}>
            {/* Left side - Text content */}
            <div className="features-text-content">
              <div className="feature-highlight">
                <div className="highlight-marker"></div>
                <div className="highlight-content">
                  <h3 className="feature-title">
                    Souscription à des abonnements
                  </h3>
                  <p className="feature-description">
                    Abonne-toi pour débloquer des fonctionnalités avancées :
                    géolocalisation, personnalisation poussée, analytics
                    détaillées et plus encore...
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Phone mockups */}
            <div className="features-mockup">
              <div className="circle-decoration"></div>
              <div className="blue-dot"></div>
              <div className="phone-container">
                <img
                  src={Statistique2}
                  alt="App Feature"
                  className="phone-image phone-left"
                />
                <img
                  src={Statistique1}
                  alt="App Feature2"
                  className="phone-image phone-right"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="promo-container">
          <div className="promo-box">
            <div className="promo-text">
              <h1>Sur Mbo’a Events, tout le monde est invité!</h1>
              <p>
                Notre applaution est 100% Camerounaise et facilite l’accès à
                l’information pour tous. Elle est maintenant disponible sur
                toutes les plateformes de téléchargement. Rejoignez-nous pour ne
                rien manquer sur tout ce qui se passe au MBOA!
              </p>
               <div className="mboa-action-buttons">
            <button className="mboa-download-cta">
              S'inscrire sur la liste d'attente <span>→</span>
            </button>
          </div>

            </div>
            <div className="promo-phones">
              <img
                src={s2}
                alt="Login screen"
                className="phone phone-back animate-phone-back"
              />
              <img
                src={svg1}
                alt="App UI screen"
                className="phone phone-front animate-phone-front"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MboaFeatures;
