import React, { useState } from "react";
import { connect } from "react-redux";

import { buyShirt, updateHistory } from "../../redux/index";
import ModuleWarning from "../ui/ModuleWarning";

interface ShirtContainerProps {
  numOfShirts: number;
  name: string;
  buyShirt: (num: number, finish: string) => void;
  updateHistory: (purchase: string) => void;
}

const ShirtContainer: React.FunctionComponent<ShirtContainerProps> = (
  props
) => {
  const [num, setNum] = useState(1);
  const [size, setSize] = useState("small");
  const [toggle, setToggle] = useState(false);
  const [msg, setMsg] = useState("");

  const msg1 = `Please do not enter any higher`;
  const msg2 = `Desired quantity is too high, please select a value within ${props.numOfShirts}`;

  return (
    <div className="shirts__container">
      <div className="field__container">
        <div className="field">
          <label>
            Shirts left <br />
            <span>{props.numOfShirts}</span>
          </label>
          <input
            type="number"
            value={num}
            onChange={(e) => {
              if (Number(e.target.value) > 1000) {
                setToggle(true);
                setMsg(msg1);
              } else {
                setNum(Number(e.target.value));
              }
            }}
          ></input>
        </div>
        <div className="field">
          <label htmlFor="shirtSize">Select size</label>
          <select
            id="shirtSize"
            name="shirtSize"
            value={size}
            onChange={(e) => {
              setSize(e.target.value);
            }}
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
      </div>
      <div className="submit">
        <button
          className="btn btn-primary"
          aria-label={`Buy ${num} shirts`}
          onClick={
            num < props.numOfShirts
              ? () => {
                  props.buyShirt(num, size);
                  props.updateHistory(`${num} ${size} ${props.name}`);
                }
              : () => {
                  setToggle(true);
                  setMsg(msg2);
                  setNum(1);
                }
          }
        >
          Buy {num} {size} Shirts
        </button>
      </div>
      {toggle ? (
        <>
          <ModuleWarning msg={msg} />
          <div className="module__close" onClick={() => setToggle(false)}></div>
        </>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state: {
  shirt: { numOfShirts: number; name: string };
}) => {
  return {
    numOfShirts: state.shirt.numOfShirts,
    name: state.shirt.name,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    buyShirt: (num: number, size: string) => dispatch(buyShirt(num, size)),
    updateHistory: (purchase: string) => dispatch(updateHistory(purchase)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShirtContainer);
