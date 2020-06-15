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
  const pages = names.map((name) => (
    <li key={name}>
      <NavLink to={"/" + name} activeClassName="link__active">
        {name}
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
