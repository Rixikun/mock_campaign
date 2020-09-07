import React, { useState, useEffect } from "react";
import axios from "axios";
import { UseInput } from "../hooks";

const ModuleThanks = (props) => {
  const [user, setUser] = useState({ email: "" });
  const [alert, setAlert] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const warning = "Incorrect email, please enter correct email.";
  const [email, bindEmail, resetEmail] = UseInput("");

  const url = `https://mock-campaign-server.herokuapp.com/api/users/${props.id}`;
  const getUser = async () => {
    try {
      const { data } = await axios.get(url);
      setUser(data);
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };
  const deleteUser = async () => {
    try {
      await axios.delete(url);
      resetEmail();
    } catch (err) {
      console.log(err);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (email === user.email) {
      setDeleting(true);
      setTimeout(() => {
        deleteUser();
        window.location.href = "http://localhost:3000/Volunteer/";
      }, 4000);
    } else {
      setAlert(true);
    }
  };

  useEffect(() => {
    let isMounted = true;
    isMounted && getUser();
    return () => (isMounted = false);
  }, [user]);

  const deleteReq = !deleting ? (
    <form className="form-delete" onSubmit={submitHandler}>
      <label>Enter email</label>
      <input
        type="email"
        {...bindEmail}
        required
        placeholder="your-email@email.com"
      ></input>
      <button className="btn btn-primary" aria-label="Submit delete request">
        Remove me
      </button>
    </form>
  ) : (
    <div className="loader-wrapper">
      <div className="spinner">
        <div className="spinner-inner"></div>
      </div>
    </div>
  );
  return (
    <div className="module__container">
      <div className="moduleThanks">
        <p>{deleting ? "Sorry to see you go!" : props.msg}</p>
        {alert ? (
          <p>
            <strong>{warning}</strong>
          </p>
        ) : (
          ""
        )}
        {props.id ? deleteReq : ""}
      </div>
    </div>
  );
};

export default ModuleThanks;
