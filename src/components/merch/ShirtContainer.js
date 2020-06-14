import React, { useState } from "react";
import { connect } from "react-redux";

import { buyShirt } from "../../redux/index";

const ShirtContainer = (props) => {
  const [num, setNum] = useState(1);
  return (
    <div>
      Number of Shirts left : {props.numOfShirts}
      <input
        type="text"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      ></input>
      <button onClick={() => props.buyShirt(num)}>Buy {num} Shirts</button>
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
