import React, { useState } from "react";
import { UseInput } from "../hooks";
import axios from "axios";
import ModuleThanks from "../ui/ModuleThanks";

const VolunteerForm = () => {
  const [firstName, bindFirstName, resetFirstName] = UseInput("");
  const [lastName, bindLastName, resetLastName] = UseInput("");
  const [email, bindEmail, resetEmail] = UseInput("");
  const [phoneNumber, bindPhoneNumber, resetPhoneNumber] = UseInput("");

  const [press, setPress] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setPress(true);
    await axios.post("https://mock-campaign-server.herokuapp.com/api/users/", {
      firstName,
      lastName,
      email,
      phone: phoneNumber,
    });
    setTimeout(() => {
      setPress(false);
      resetFirstName();
      resetLastName();
      resetEmail();
      resetPhoneNumber();
    }, 3000);
  };
  return (
    <div className="volunteer__form">
      <form onSubmit={submitHandler}>
        <div className="field">
          <label>First Name</label>
          <input
            type="text"
            {...bindFirstName}
            required
            placeholder="First name"
          ></input>
        </div>
        <div className="field">
          <label>Last Name</label>
          <input
            type="text"
            {...bindLastName}
            required
            placeholder="Last name"
          ></input>
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            {...bindEmail}
            required
            placeholder="name@email.com"
          ></input>
        </div>
        <div className="field">
          <label>Phone</label>
          <input
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            {...bindPhoneNumber}
            required
            placeholder="123-456-7890"
          ></input>
        </div>
        <div className="submit">
          <button
            className="btn btn-primary"
            aria-label="Submit volunteer form"
          >
            Submit
          </button>
        </div>
      </form>
      {press ? (
        <>
          {" "}
          <div className="loader-wrapper">
            <span className="loader"></span>
          </div>
          <ModuleThanks msg={`Thank you ${firstName}`} />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default VolunteerForm;
