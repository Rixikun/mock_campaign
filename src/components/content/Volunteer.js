import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import VolunteerForm from "./VolunteerForm";

const Volunteer = () => {
  const [users, setUsers] = useState([]);

  const url = "https://mock-campaign-server.herokuapp.com/api/users/";

  const getUsers = async () => {
    const { data } = await axios.get(url);
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, [users]);

  const userNames = users.map((e) => (
    <li key={e.id}>
      <NavLink
        to={{
          pathname: "/Volunteer/user/" + e.id,
          state: { name: e.firstName + " " + e.lastName },
        }}
      >
        {e.firstName} {e.lastName[0]}.
      </NavLink>
    </li>
  ));

  return (
    <div className="volunteer">
      <div className="title">
        <h2>Volunteer</h2>
      </div>
      <div className="description">
        Wow! So happy to receive your time and efforts! Please fill out this
        form to join our team :)
      </div>
      <VolunteerForm />
      <div className="volunteer__list">
        {!users.length ? (
          <div className="loader-wrapper">
            <div className="spinner">
              <span className="spinner-inner"></span>
            </div>
          </div>
        ) : (
          ""
        )}
        <h5>Friends already signed up: </h5>
        <ul>{userNames}</ul>
      </div>
    </div>
  );
};

export default Volunteer;
