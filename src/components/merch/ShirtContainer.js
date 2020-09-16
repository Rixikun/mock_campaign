import React, { useState } from "react";
import { connect } from "react-redux";

import { buyShirt } from "../../redux/index";
import ModuleWarning from "../ui/ModuleWarning";

const ShirtContainer = (props) => {
  const [num, setNum] = useState(1);
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
      </div>
      <div className="submit">
        <button
          className="btn btn-primary"
          aria-label={`Buy ${num} shirts`}
          onClick={
            num < props.numOfShirts
              ? () => props.buyShirt(num)
              : () => {
                  setToggle(true);
                  setMsg(msg2);
                  setNum(1);
                }
          }
        >
          Buy {num} Shirts
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyShirt: (num) => dispatch(buyShirt(num)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShirtContainer);
