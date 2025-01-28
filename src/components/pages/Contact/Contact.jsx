import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Форма отправлена:', form);
    setSubmitted(true);
  };

  return (
    <div>
      <h1>Контакты</h1>
      {submitted ? (
        <p>Спасибо за ваше сообщение!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Имя:
            <input type="text" name="name" value={form.name} onChange={handleChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={form.email} onChange={handleChange} />
          </label>
          <label>
            Сообщение:
            <textarea name="message" value={form.message} onChange={handleChange} />
          </label>
          <button type="submit">Отправить</button>
        </form>
      )}
    </div>
  );
};

export default Contact;