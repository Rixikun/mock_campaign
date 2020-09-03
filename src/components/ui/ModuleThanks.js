import React from "react";

const ModuleThanks = (props) => {
  return (
    <div className="module__container">
      <div className="moduleThanks">
        <p>{props.msg}</p>
      </div>
    </div>
  );
};

export default ModuleThanks;
