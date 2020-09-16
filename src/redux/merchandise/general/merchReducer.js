import { FETCH_HISTORY } from "./merchTypes";

const merchReducer = (state = { purchaseHistory: [] }, action) => {
  switch (action.type) {
    case FETCH_HISTORY:
      return {
        ...state,
        purchaseHistory: [...state.purchaseHistory, action.payload],
      };
    default:
      return state;
  }
};

export default merchReducer;
