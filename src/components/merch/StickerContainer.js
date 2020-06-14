import React, { useState } from "react";
import { connect } from "react-redux";

import { buySticker } from "../../redux/index";

const StickerContainer = (props) => {
  const [num, setNum] = useState(1);
  return (
    <div>
      Number of Stickers left : {props.numOfStickers}
      <input
        type="text"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      ></input>
      <button onClick={() => props.buySticker(num)}>Buy {num} Stickers</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfStickers: state.sticker.numOfStickers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buySticker: (num) => dispatch(buySticker(num)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StickerContainer);
