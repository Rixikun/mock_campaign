import { UPDATE_HISTORY } from "./merchTypes";

export const updateHistory = (purchase: string) => {
  return {
    type: UPDATE_HISTORY,
    payload: purchase,
  };
};
