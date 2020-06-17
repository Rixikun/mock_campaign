import React from "react";

import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="header">
      <div className="clearfix"></div>
      <div className="header__left">
        <div className="logo">
          <a href="/">
            <h4>Candidate For Position!</h4>
          </a>
        </div>
      </div>
      <div className="header__right">
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
