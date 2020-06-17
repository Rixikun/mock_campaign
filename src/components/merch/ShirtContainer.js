import React, { useState } from "react";
import { connect } from "react-redux";

import { buyShirt } from "../../redux/index";

const ShirtContainer = (props) => {
  const [num, setNum] = useState(1);
  return (
    <div className="shirts__container">
      <div className="field">
        <label>
          Shirts left <br />
          <span>{props.numOfShirts}</span>
        </label>
        <input
          type="number"
          value={num}
          onChange={(e) => {
            e.target.value > 1000000
              ? alert(`Please do not enter any higher`)
              : setNum(e.target.value);
          }}
        ></input>
      </div>
      <div className="submit">
        <button
          className="btn btn-primary"
          onClick={
            num < props.numOfShirts
              ? () => props.buyShirt(num)
              : () => {
                  alert(
                    `Desired quantity is too high, please select a value within ${props.numOfStickers}`
                  );
                  setNum(1);
                }
          }
        >
          Buy {num} Shirts
        </button>
      </div>
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
