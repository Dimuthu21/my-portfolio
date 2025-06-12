import React from 'react';
import './Contact.css';
import email from '../../assets/email.jpg';
import tp from '../../assets/tp.png';
import loca from '../../assets/loca.png';

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c769d2fa-5476-42be-92c3-76fb06332af7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in Touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>Feel free to send me a message about anything you want me to work on.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={email} alt="Email Icon" />
              <p>dimuthushali@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={tp} alt="Phone Icon" />
              <p>33333333333</p>
            </div>
            <div className="contact-detail">
              <img src={loca} alt="Location Icon" />
              <p>Dimuthu, Rathmetiya, Makulella, Bandarawela</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor>Your Name</label>
            <input type=" text" placeholder='Enter your name'name ='name' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email' />
            <label htmlFor="">Write your message here</label>
            <textarea name="mesaage" raws="8" placeholder='Enter your message'></textarea>
            <button type ='submit' className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
