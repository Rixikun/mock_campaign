import React, { useState } from "react";
import ModuleThanks from "../ui/ModuleThanks";

const SingleUser = (props) => {
  const [press, setPress] = useState(false);

  return (
    <div className="SingleUser">
      <header>
        <h2>This is {props.location.state.name}</h2>
      </header>
      <main>
        <p>{props.location.state.name} believes in the eggcellent candidate!</p>
        <button className="btn btn-primary" onClick={() => setPress(!press)}>
          Actually, remove me from this list.
        </button>
        {press ? <ModuleThanks msg="Hello testing" /> : ""}
      </main>
    </div>
  );
};

export default SingleUser;
