import React, { useState } from "react";
import { connect } from "react-redux";

import { buySticker, updateHistory } from "../../redux/index";
import ModuleWarning from "../ui/ModuleWarning";

const StickerContainer = (props) => {
  const [num, setNum] = useState(1);
  const [finish, setFinish] = useState("matte");
  const [toggle, setToggle] = useState(false);
  const [msg, setMsg] = useState("");

  const msg1 = `Please do not enter any higher`;
  const msg2 = `Desired quantity is too high, please select a value within ${props.numOfStickers}`;

  return (
    <div className="stickers__container">
      <div className="field__container">
        <div className="field">
          <label htmlFor="stickersInput">
            Stickers left <br />
            <span>{props.numOfStickers}</span>
          </label>
          <input
            id="stickersInput"
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
          <label htmlFor="stickersFinish">Select finish</label>
          <select
            id="stickersFinish"
            name="stickersFinish"
            value={finish}
            onChange={(e) => {
              setFinish(e.target.value);
            }}
          >
            <option value="matte">Matte</option>
            <option value="gloss">Gloss</option>
          </select>
        </div>
      </div>
      <div className="submit">
        <button
          className="btn btn-primary"
          aria-label={`Buy ${num} stickers`}
          onClick={
            num < props.numOfStickers
              ? () => {
                  props.buySticker(num, finish);
                  props.updateHistory(`${num} ${finish} ${props.name}`);
                }
              : () => {
                  setToggle(true);
                  setMsg(msg2);
                  setNum(1);
                }
          }
        >
          Buy {num} {finish} Stickers
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
    name: state.sticker.name,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buySticker: (num, finish) => dispatch(buySticker(num, finish)),
    updateHistory: (purchase) => dispatch(updateHistory(purchase)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StickerContainer);
