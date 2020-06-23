import React from "react";

const ModuleWarning = (props) => {
  return (
    <div className="module__container">
      <div className="moduleWarning">
        <span>
          {props.msg} {props.num}
        </span>
      </div>
    </div>
  );
};

export default ModuleWarning;
