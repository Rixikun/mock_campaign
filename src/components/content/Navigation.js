import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const names = [
    "About",
    "Stances",
    "Endorsement",
    "Volunteer",
    "Donate",
    "Merchandise",
  ];
  const pages = names.map((page) => (
    <li>
      <NavLink to={"/" + page} activeClassName="link__active">
        {page}
      </NavLink>
    </li>
  ));
  return (
    <div>
      <ul>{pages}</ul>
    </div>
  );
};

export default Navigation;
