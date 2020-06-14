import React from "react";
import { Link } from "react-router-dom";

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
      <Link to={"/" + page}>{page}</Link>
    </li>
  ));
  return (
    <div>
      <ul>{pages}</ul>
    </div>
  );
};

export default Navigation;
