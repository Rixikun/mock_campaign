import { BUY_SHIRT } from "./shirtTypes";

export const buyShirt = (num = 1) => {
  return {
    type: BUY_SHIRT,
    payload: num,
  };
};
