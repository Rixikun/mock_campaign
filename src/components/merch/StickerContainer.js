import React, { useState } from "react";
import { connect } from "react-redux";

import { buySticker } from "../../redux/index";

const StickerContainer = (props) => {
  const [num, setNum] = useState(1);
  return (
    <div className="stickers__container">
      <div className="field">
        <label>
          Stickers left <br />
          <span>{props.numOfStickers}</span>
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
            num < props.numOfStickers
              ? () => props.buySticker(num)
              : () => {
                  alert(
                    `Desired quantity is too high, please select a value within ${props.numOfStickers}`
                  );
                  setNum(1);
                }
          }
        >
          Buy {num} Stickers
        </button>
      </div>
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
