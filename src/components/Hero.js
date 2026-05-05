import React from "react";
import "./styles/Hero.css";

function Hero() {
  return (
    <section id="home" className="section-card hero">
      <span className="hero-badge">Софтуерен партньор за бизнеса</span>
      <h1>
        Добре дошли в <span className="hero-accent">Dinev Marketing Pro</span>
      </h1>
      <p className="hero-lead">
        Ние намираме точните решения за фирми и разработваме софтуер по поръчка
        според техните нужди - уебсайтове, системи и дигитални платформи.
      </p>
      <div className="hero-highlights">
        <span>Софтуер по поръчка</span>
        <span>Уебсайтове</span>
        <span>Дългосрочно развитие</span>
      </div>
    </section>
  );
}

export default Hero;
