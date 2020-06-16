import React from "react";
import { Link } from "react-router-dom";

import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="header">
      <div className="clearfix"></div>
      <div className="header__left">
        <h4>Candidate For Position!</h4>
        <div>
          <Link to="/">Home</Link>
        </div>
      </div>
      <div className="header__right">
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
