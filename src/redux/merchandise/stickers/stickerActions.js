import { BUY_STICKER } from "./stickerTypes";

export const buySticker = (num, finish) => {
  return {
    type: BUY_STICKER,
    payload: { num, finish },
  };
};
