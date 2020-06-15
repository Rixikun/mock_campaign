import React, { useState } from "react";
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
  const pages = names
    .map((name) => (
      <li key={name}>
        <NavLink to={"/" + name} activeClassName="link__active">
          {name}
        </NavLink>
      </li>
    ))
    .concat(
      <li key="HowTo">
        <NavLink to="/HowTo" activeClassName="link__active">
          How To Vote
        </NavLink>
      </li>
    );

  // toggle dropdown list Component
  function DropDown() {
    const [display, setDisplay] = useState(false);
    const result = display ? pages : null;
    function toggle(e) {
      e.preventDefault();
      setDisplay(!display);
    }

    return (
      <div>
        <a className="fa fa-chevron-down" onClick={(e) => toggle(e)}></a>
        {result}
      </div>
    );
  }

  return (
    <div className="navigation">
      <ul>
        <DropDown />
      </ul>
    </div>
  );
};

export default Navigation;
