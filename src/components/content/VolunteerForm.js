import React from "react";
import UseInput from "../hooks/UseInput";

const VolunteerForm = () => {
  const [firstName, bindFirstName, resetFirstName] = UseInput("");
  const [lastName, bindLastName, resetLastName] = UseInput("");
  const [email, bindEmail, resetEmail] = UseInput("");
  const [phoneNumber, bindPhoneNumber, resetPhoneNumber] = UseInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    resetFirstName();
    resetLastName();
    resetEmail();
    resetPhoneNumber();
    alert(`Thank you ${firstName}`);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name</label>
          <input type="text" {...bindFirstName}></input>
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" {...bindLastName}></input>
        </div>
        <div>
          <label>Email</label>
          <input type="text" {...bindEmail}></input>
        </div>
        <div>
          <label>Phone</label>
          <input type="text" {...bindPhoneNumber}></input>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default VolunteerForm;
