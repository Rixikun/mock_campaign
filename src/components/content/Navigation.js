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
    <div className="navigation">
      <ul>
        {pages}
        <li key="HowTo">
          <NavLink to="/HowTo" activeClassName="link__active">
            How To Vote
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
