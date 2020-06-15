import React from "react";
import { Link } from "react-router-dom";

import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="header">
      <div>
        <h4>Candidate For Position!</h4>
      </div>
      <Link to="/">Home</Link>
      <Navigation />
    </div>
  );
};

export default Header;
