import React from "react";
import { UseInput } from "../hooks";
import axios from "axios";

const VolunteerForm = () => {
  const [firstName, bindFirstName, resetFirstName] = UseInput("");
  const [lastName, bindLastName, resetLastName] = UseInput("");
  const [email, bindEmail, resetEmail] = UseInput("");
  const [phoneNumber, bindPhoneNumber, resetPhoneNumber] = UseInput("");

  const submitHandler = async (e) => {
    e.preventDefault();
    resetFirstName();
    resetLastName();
    resetEmail();
    resetPhoneNumber();

    await axios.post("https://mock-campaign-server.herokuapp.com/api/users/", {
      firstName,
      lastName,
      email,
      phone: phoneNumber,
    });

    alert(`Thank you ${firstName}`);
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
          <button className="btn btn-primary" aria-label="Submit volunteer form">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default VolunteerForm;
