import React, { useState, useEffect } from "react";
import axios from "axios";

import ModuleThanks from "../ui/ModuleThanks";
import { UseInput } from "../hooks";

const SingleUser = (props) => {
  const state = props.location.state;
  const [press, setPress] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [currEmail, setCurrEmail] = useState("");
  const [alert, setAlert] = useState(false);
  const id = state.id;
  const [newEmail, bindNewEmail, resetNewEmail] = UseInput("");
  const [oldEmail, bindOldEmail, resetOldEmail] = UseInput("");
  const url = `https://mock-campaign-server.herokuapp.com/api/users/${id}`;
  const getUser = async () => {
    const { data } = await axios.get(url);
    setCurrEmail(data.email);
  };
  const updateUser = async () => {
    try {
      setUpdating(true);
      await axios.put(url, {
        email: newEmail,
      });
      resetNewEmail();
      resetOldEmail();
      setAlert(false);
      setUpdating(false);
      setUpdated(true);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (oldEmail === currEmail) {
      updateUser();
    } else {
      setAlert(true);
    }
  };

  return (
    <div className="SingleUser">
      <header>
        <h2>This is {state.name}</h2>
      </header>
      <main>
        <p>{state.name} believes in the eggcellent candidate!</p>
        <form onSubmit={submitHandler}>
          <label>Current email</label>
          <input
            type="email"
            {...bindOldEmail}
            required
            placeholder="current-email@email.com"
          ></input>
          <label>New email</label>
          <input
            type="email"
            {...bindNewEmail}
            required
            placeholder="new-email@email.com"
          ></input>
          {alert ? (
            <p>
              <strong>Please enter correct current email</strong>
            </p>
          ) : (
            ""
          )}
          {updating ? (
            <div className="loader-wrapper">
              <div className="spinner">
                <div className="spinner-inner"></div>
              </div>
            </div>
          ) : (
            ""
          )}
          {updated ? (
            <p className="updated">
              <strong>Updated!</strong>
            </p>
          ) : (
            ""
          )}
          <button className="btn btn-primary">Update Email</button>
        </form>
        <button
          className="btn btn-primary btn-delete"
          onClick={() => setPress(!press)}
        >
          Actually, remove me from this list.
        </button>
        {press ? (
          <>
            <ModuleThanks
              msg="If you're sure you'd like to leave, please enter your email."
              id={id}
            />
            <div
              className="module-backdrop"
              onClick={() => setPress(!press)}
            ></div>
          </>
        ) : (
          ""
        )}
      </main>
    </div>
  );
};

export default SingleUser;
