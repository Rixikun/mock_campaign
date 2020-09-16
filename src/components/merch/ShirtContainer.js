import React, { useState } from "react";
import { connect } from "react-redux";

import { buyShirt, fetchHistory } from "../../redux/index";
import ModuleWarning from "../ui/ModuleWarning";

const ShirtContainer = (props) => {
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
              if (e.target.value > 1000) {
                setToggle(true);
                setMsg(msg1);
              } else {
                setNum(e.target.value);
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

const mapStateToProps = (state) => {
  return {
    numOfShirts: state.shirt.numOfShirts,
    name: state.shirt.name,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyShirt: (num, size) => dispatch(buyShirt(num, size)),
    updateHistory: (purchase) => dispatch(fetchHistory(purchase)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShirtContainer);
