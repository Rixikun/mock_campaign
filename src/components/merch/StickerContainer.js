import React, { useState } from "react";
import { connect } from "react-redux";

import { buySticker } from "../../redux/index";
import ModuleWarning from "../ui/ModuleWarning";

const StickerContainer = (props) => {
  const [num, setNum] = useState(1);
  const [toggle, setToggle] = useState(false);
  const [msg, setMsg] = useState("");

  const msg1 = `Please do not enter any higher`;
  const msg2 = `Desired quantity is too high, please select a value within ${props.numOfStickers}`;

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
            if (e.target.value > 1000) {
              setToggle(true);
              setMsg(msg1);
            } else {
              setNum(e.target.value);
            }
          }}
        ></input>
      </div>
      <div className="submit">
        <button
          className="btn btn-primary"
          aria-label={`Buy ${num} stickers`}
          onClick={
            num < props.numOfStickers
              ? () => props.buySticker(num)
              : () => {
                  setToggle(true);
                  setMsg(msg2);
                  setNum(1);
                }
          }
        >
          Buy {num} Stickers
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
    numOfStickers: state.sticker.numOfStickers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buySticker: (num) => dispatch(buySticker(num)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StickerContainer);
