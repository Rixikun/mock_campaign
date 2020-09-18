import { BUY_SHIRT } from "./shirtTypes";

export const buyShirt = (num = 1, size: string) => {
  return {
    type: BUY_SHIRT,
    payload: { num, size },
  };
};
