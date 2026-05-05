import React from "react";
import "./styles/Services.css";

const services = [
  {
    title: "Уебсайтове за бизнес",
    text: "Модерни, бързи и responsive сайтове, които представят фирмата ви професионално."
  },
  {
    title: "Софтуер по поръчка",
    text: "Разработка на вътрешни системи, CRM/ERP модули и автоматизации според вашия процес."
  },
  {
    title: "Поддръжка и развитие",
    text: "Дългосрочна техническа поддръжка, ъпдейти и подобрения за устойчив растеж."
  }
];

function Services() {
  return (
    <section id="services" className="section-card services-card">
      <div className="services-head">
        <span className="services-badge">Какво правим</span>
        <h2>Нашите услуги</h2>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article key={service.title} className="service-item">
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
