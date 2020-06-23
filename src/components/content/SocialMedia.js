import React from "react";

const SocialMedia = () => {
  return (
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
        <a href="#" alt="email">
          <i className="fa fa-envelope-o"></i>
        </a>
      </div>
    </div>
  );
};
export default SocialMedia;
