import React, { useState } from "react";
import { FormSubmit } from "../firebase/firebase-utils";
import SocialContact from "./social-contact";
import "./contact.scss";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    FormSubmit(email, message);
    setSubmitted(true);
  };
  const SubmittedUI = () => (
    <div className="text-center">
      <h3 className="text-capitalize">
        Thanks for your Submission. We will contact you soon.
      </h3>
    </div>
  );
  const FormUI = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          className="form-control"
          placeholder="name@example.com"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll Never Share Your Email With Anyone Else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="message">Your Project Details</label>
        <textarea
          className="form-control"
          onChange={(e) => setMessage(e.target.value)}
          required
          rows="3"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-raised btn-primary submit-btn">
        Submit
      </button>
    </form>
  );
  const SocialUI = () => (
    <div className="container pt-3 text-center">
      <div className="row">
        <div className="col">
          <SocialContact
            logo="logo-facebook"
            link="https://web.facebook.com/ShofiqulMiraz/"
            tooltip="Connect on Facebook"
          />
          <SocialContact
            logo="logo-github"
            link="https://github.com/ShofiqulMiraz"
            tooltip="Connect on Github"
          />
          <SocialContact
            logo="logo-linkedin"
            link="https://www.linkedin.com/in/shofiqulmiraz/"
            tooltip="Connect on LinkedIn"
          />
          <SocialContact
            logo="logo-instagram"
            link="https://www.instagram.com/shofiqulmiraz/"
            tooltip="Connect on instagram"
          />
        </div>
      </div>
    </div>
  );
  return (
    <div className="container mt-5 mb-5">
      <h2 className="site-head">Contact</h2>
      <p className="site-para">tell us about your project</p>
      {submitted ? SubmittedUI() : FormUI()}
      {SocialUI()}
    </div>
  );
};

export default Contact;
