import { BUY_STICKER } from "./stickerTypes";

const initialState = {
  name: "stickers",
  numOfStickers: 200,
  finish: "",
  boughtStickers: 0,
  history: [],
};

const stickerReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_STICKER:
      return {
        ...state,
        numOfStickers: state.numOfStickers - action.payload.num,
        finish: action.payload.finish,
        boughtStickers: action.payload.num,
        history: [
          ...state.history,
          `${action.payload.num} ${action.payload.finish} ${state.name}`,
        ],
      };

    default:
      return state;
  }
};

export default stickerReducer;
