import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import arrow_right from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c5f2a561-f623-411e-ab63-6deab355fdee");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h2>
          Send us a message <img src={msg_icon} alt="" />
        </h2>
        <p>
          Feel free to reach out through contact form or find our contact
          information below
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            itzone@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            9901452566
          </li>
          <li>
            <img src={location_icon} alt="" />
            cv raman nagar,bengaluru
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Your number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your number"
            required
          />
          <label htmlFor="">Your message</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Enter your message.."
          ></textarea>
          <button className="btn dark-btn">
            Submit <img src={arrow_right} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
