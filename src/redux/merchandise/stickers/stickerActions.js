import { BUY_STICKER } from "./stickerTypes";

export const buySticker = (num) => {
  return {
    type: BUY_STICKER,
    payload: num,
  };
};
