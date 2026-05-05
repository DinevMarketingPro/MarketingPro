import React from "react";
import "./styles/Process.css";

function Process() {
  return (
    <section className="section-card process-card">
      <div className="process-head">
        <span className="process-badge">Как работим</span>
        <h2>Ясен процес от идея до готов продукт</h2>
      </div>

      <div className="process-steps">
        <article>
          <span>01</span>
          <h3>Анализ</h3>
          <p>Обсъждаме целите и нуждите на бизнеса ви.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Изработка</h3>
          <p>Създаваме дизайн и функционалност с фокус върху резултата.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Развитие</h3>
          <p>След пускане продължаваме с оптимизация и надграждане.</p>
        </article>
      </div>
    </section>
  );
}

export default Process;
