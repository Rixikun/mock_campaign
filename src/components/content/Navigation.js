import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Media from "react-media";

const Navigation = (props) => {
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
    function toggle(e) {
      e.preventDefault();
      setDisplay(!display);
    }
    const [display, setDisplay] = useState(false);
    const result = display ? (
      <>
        <ul className="navigation__pages">{pages}</ul>
        <div className="navigation__close" onClick={(e) => toggle(e)}></div>
      </>
    ) : null;

    return (
      <>
        <div className="dropdown__container" onClick={(e) => toggle(e)}>
          <a className="fa fa-chevron-down"></a>
        </div>
        {result}
      </>
    );
  }

  return (
    <div className="navigation">
      <Media query="(max-width: 37.5em)">
        {props?.inFooter ? (
          <ul className="navigation__footer">{pages}</ul>
        ) : (
          <DropDown />
        )}
      </Media>

      <Media query="(min-width: 37.5em)">
        {props?.inFooter ? (
          <ul className="navigation__footer">{pages}</ul>
        ) : (
          <ul className="navigation__pages">{pages}</ul>
        )}
      </Media>
    </div>
  );
};

export default Navigation;
