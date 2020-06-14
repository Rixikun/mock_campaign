import { BUY_STICKER } from "./stickerTypes";

const initialState = {
  name: "stickers",
  numOfStickers: 200,
};

const stickerReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_STICKER:
      return {
        ...state,
        numOfStickers: state.numOfStickers - action.payload,
      };

    default:
      return state;
  }
};

export default stickerReducer;
