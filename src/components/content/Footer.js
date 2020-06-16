import React from "react";
import { UseInput } from "../hooks";

import Navigation from "./Navigation";

const Footer = () => {
  const [email, bindEmail, resetEmail] = UseInput("");
  const submitHandler = (e) => {
    e.preventDefault();
    resetEmail();
  };

  return (
    <div>
      Footer Contact:
      <br />
      Email: candidate@email.com
      <br />
      Phone: 1 234-456-7890 Social
      <br />
      Media: Fb Twitter IG
      <br />
      <div>
        Subscribe to our Newsletter:
        <br />
        <form onSubmit={submitHandler}>
          <div>
            <label>Email</label>
            <input type="text" {...bindEmail}></input>
          </div>
          <button>Submit</button>
        </form>
      </div>
      {/* <Navigation /> */}
    </div>
  );
};

export default Footer;
