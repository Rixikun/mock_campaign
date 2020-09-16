import { UPDATE_HISTORY } from "./merchTypes";

export const updateHistory = (purchase) => {
  return {
    type: UPDATE_HISTORY,
    payload: purchase,
  };
};
