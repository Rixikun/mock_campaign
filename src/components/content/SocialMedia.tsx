import React from "react";

const SocialMedia: React.FunctionComponent = () => {
  return (
    <div className="social__container">
      <span>Follow us on</span>
      <div className="social__container__icons">
        <a href="https://www.facebook.com/" aria-label="facebook">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="https://twitter.com/LinXiaDev/" aria-label="twitter">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/rixikun/" aria-label="instagram">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="mailto:linyianxia@gmail.com" aria-label="email">
          <i className="fa fa-envelope-o"></i>
        </a>
      </div>
    </div>
  );
};
export default SocialMedia;
