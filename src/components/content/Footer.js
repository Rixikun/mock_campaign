import React from "react";
import { UseInput } from "../hooks";

import Navigation from "./Navigation";

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
          <div className="social__container">
            <span>Follow us on</span>
            <div className="social__container__icons">
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer__mid">
          Subscribe to our Newsletter:
          <br />
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
