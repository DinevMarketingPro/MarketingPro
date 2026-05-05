import React, { useState } from "react";
import "./styles/Requests.css";

function Requests() {
  const [formData, setFormData] = useState({
    nameOfProject: "",
    nameOfCompany: "",
    description: "",
    phone: "",
    email: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const baseUrl = process.env.REACT_APP_API_URL || "http://localhost:5000";
      const response = await fetch(`${baseUrl}/api/projects`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Възникна грешка при изпращане на заявката.");
      }

      setStatus({
        type: "success",
        message: "Заявката е изпратена успешно. Ще се свържем с вас скоро."
      });
      setFormData({
        nameOfProject: "",
        nameOfCompany: "",
        description: "",
        phone: "",
        email: ""
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Неуспешно изпращане. Моля, опитайте отново."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="requests" className="section-card requests-card">
      <div className="requests-head">
        <span className="requests-badge">Нова заявка</span>
        <h2>Заявки</h2>
        <p>
          Изпратете ни вашата заявка и ние ще подготвим решение според нуждите
          на вашата фирма.
        </p>
      </div>

      <form className="request-form" onSubmit={handleSubmit}>
        <div className="request-grid">
          <label>
            Име на проект
            <input
              type="text"
              name="nameOfProject"
              value={formData.nameOfProject}
              onChange={handleChange}
              placeholder="Напр. Фирмен уебсайт"
              required
            />
          </label>

          <label>
            Име на фирма
            <input
              type="text"
              name="nameOfCompany"
              value={formData.nameOfCompany}
              onChange={handleChange}
              placeholder="Име на фирмата"
              required
            />
          </label>
        </div>

        <label>
          Описание
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            placeholder="Опишете накратко какъв софтуер или сайт ви е нужен."
          />
        </label>

        <div className="request-grid">
          <label>
            Телефон
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+359..."
              required
            />
          </label>

          <label>
            Имейл
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@company.com"
              required
            />
          </label>
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Изпращане..." : "Изпрати заявка"}
        </button>
      </form>

      {status.message ? (
        <p className={`form-status ${status.type === "success" ? "ok" : "error"}`}>
          {status.message}
        </p>
      ) : null}
    </section>
  );
}

export default Requests;
