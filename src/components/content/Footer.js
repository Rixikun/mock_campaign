import React from "react";
import { UseInput } from "../hooks";

import Navigation from "./Navigation";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  const [email, bindEmail, resetEmail] = UseInput("");
  const submitHandler = (e) => {
    e.preventDefault();
    resetEmail();
  };

  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__left">
          <div className="contact">
            <h4>CONTACT</h4>
            <span>Email: candidate@email.com</span>
            <span>Phone: 1 234-456-7890</span>
          </div>
          <SocialMedia />
        </div>
        <div className="footer__mid">
          <span>Subscribe to our Newsletter:</span>
          <form onSubmit={submitHandler}>
            <div className="field">
              <input
                type="text"
                {...bindEmail}
                placeholder="Email Address"
              ></input>
            </div>
            <div className="submit">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className="footer__right">
        <Navigation inFooter="inFooter" />
      </div>
    </div>
  );
};

export default Footer;
