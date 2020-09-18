import React from "react";

interface ModuleWarningProps {
  msg: string;
  num?: number;
}

const ModuleWarning: React.FunctionComponent<ModuleWarningProps> = (props) => {
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
