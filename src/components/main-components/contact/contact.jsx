import React, { useState } from "react";
import { FormSubmit } from "../firebase/firebase-utils";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    FormSubmit(email, message);
    setSubmitted(true);
  };
  return (
    <div className="container mt-5 mb-5">
      <h2 className="site-head">Contact</h2>
      <p className="site-para">tell us about your project</p>
      {submitted ? (
        <div className="text-center">
          <h3 className="text-capitalize">
            Thanks for your Submission. We will contact you soon.
          </h3>
        </div>
      ) : (
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
          <button type="submit" className="btn btn-raised btn-primary">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
