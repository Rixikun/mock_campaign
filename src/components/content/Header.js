import React from "react";
import { Link } from "react-router-dom";

import Navigation from "./Navigation";

const Header = () => {
  return (
    <div>
      Header
      <Link to="/">Home</Link>
      <Navigation />
    </div>
  );
};

export default Header;
