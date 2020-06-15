import React from "react";
import useInput from "../hooks/useInput";

const VolunteerForm = () => {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");
  const [email, bindEmail, resetEmail] = useInput("");
  const [phoneNumber, bindPhoneNumber, resetPhoneNumber] = useInput("");

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
