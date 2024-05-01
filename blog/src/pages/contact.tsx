// export default function Contact() {
//   return (
//     <>
//     <div>
//     <header className="header mb-20">
// 				<h1 className="bg-indigo-500text-2xl bg-indigo-600 px-4 py-2 text-white mt-3 mr-4 rounded hover:bg-white hover:text-indigo-600 transition-duration-500 ease-in-out">Contact us</h1>
// 			</header>
//     </div>
//     </>
//   )
// }

// src/pages/contact.jsx

import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      <header className="header mb-20">
				<h1 className="bg-indigo-500text-2xl bg-indigo-600 px-4 py-2 text-white mt-3 mr-4 rounded hover:bg-white hover:text-indigo-600 transition-duration-500 ease-in-out">Contact us</h1>
			</header>
      <section className="section">
        <div className="container w-2/3 flow-root">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-6 flex justify-between">
              <label htmlFor="firstName">Ім'я:</label>
              <input className="w-2/3"
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mb-6 flex justify-between">
              <label htmlFor="lastName">Прізвище:</label>
              <input className="w-2/3"
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mb-6 flex justify-between">
              <label htmlFor="phone">Телефон:</label>
              <input className="w-2/3"
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mb-6 flex justify-between">
              <label htmlFor="email">Email:</label>
              <input className="w-2/3"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group mb-6 flex justify-between">
              <label htmlFor="message">Ваше повідомлення:</label>
              <textarea className="w-2/3"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button className="float-right" type="submit">Відправити</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

