import { BUY_STICKER } from "./stickerTypes";

export const buySticker = (num = 1, finish: string) => {
  return {
    type: BUY_STICKER,
    payload: { num, finish },
  };
};
