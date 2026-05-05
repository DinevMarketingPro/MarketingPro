import React from "react";
import "./styles/Contacts.css";

function Contacts() {
  return (
    <section id="contacts" className="section-card contacts-card">
      <div className="contacts-head">
        <span className="contacts-badge">Свържете се с нас</span>
        <h2>Контакти</h2>
        <p>
          Готови сме да обсъдим вашата идея и да предложим най-доброто
          технологично решение за бизнеса ви.
        </p>
      </div>

      <div className="contacts-grid">
        <article className="contact-item">
          <span className="contact-label">Имейл</span>
          <a href="mailto:contact@marketingpro.bg" className="contact-value">
            contact@marketingpro.bg
          </a>
          <p>Изпратете запитване по всяко време.</p>
        </article>

        <article className="contact-item">
          <span className="contact-label">Телефон</span>
          <a href="tel:+359888123456" className="contact-value">
            +359 888 123 456
          </a>
          <p>Понеделник - Петък, 09:00 - 18:00</p>
        </article>
      </div>

      <div className="contacts-actions">
        <a href="mailto:contact@marketingpro.bg" className="contact-cta primary">
          Изпрати имейл
        </a>
        <a href="tel:+359888123456" className="contact-cta secondary">
          Обади се сега
        </a>
      </div>
    </section>
  );
}

export default Contacts;
