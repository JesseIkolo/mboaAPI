import React, { useState } from "react";
import "./FaqQuestion.css";

const FAqQuestion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "Qui peut utiliser Mbo'a Event ?",
      answer: "Mbo'a Event est disponible pour tous les utilisateurs âgés de 13 ans et plus."
    },
    {
      question: "Est-ce que l'application sera gratuite ?",
      answer: "Oui, la version de base de Mbo'a Event sera gratuite."
    },
    {
      question: "Pourquoi s'inscrire à la liste d'attente ?",
      answer: "Pour être parmi les premiers à être informés du lancement."
    },
    {
      question: "Qu'est-ce qui nous attends dans l'application ?",
      answer: "Une plateforme complète pour événements locaux."
    },
    {
      question: "Comment recevoir les actus des événements à venir ?",
      answer: "Abonnez-vous à notre newsletter."
    },
    {
      question: "Quand est-ce que l'application sera disponible ?",
      answer: "Prévu pour le quatrième trimestre 2025."
    }
  ];

  // Split into two groups of 3 items each
  const firstGroup = faqItems.slice(0, 3);
  const secondGroup = faqItems.slice(3);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">

      <div className="faq-container">
        <div className="group">
        <h2 className="faq-title">Foire Aux Questions</h2>
        <p className="faq-description">
          Lorem ipsum dolor sit amet consectetur. Etiam adipiscing in semper viverra cursus. 
          Maecenas blandit porttitor dui nunc enim mauris sed nunc.
        </p>
        </div>
        
        <div className="faq-groups-container">
          {/* First group of 3 items */}
          <div className="faq-group">
            {firstGroup.map((item, index) => (
              <div 
                key={index} 
                className="faq-item"
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question-container">
                  <p className="faq-question">{item.question}</p>
                  <span className={`faq-toggle ${activeIndex === index ? 'active' : ''}`}>
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </div>
                {activeIndex === index && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Second group of 3 items */}
          <div className="faq-group">
            {secondGroup.map((item, index) => (
              <div 
                key={index + 3} 
                className="faq-item"
                onClick={() => toggleFAQ(index + 3)}
              >
                <div className="faq-question-container">
                  <p className="faq-question">{item.question}</p>
                  <span className={`faq-toggle ${activeIndex === index + 3 ? 'active' : ''}`}>
                    {activeIndex === index + 3 ? '−' : '+'}
                  </span>
                </div>
                {activeIndex === index + 3 && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAqQuestion;