import { UPDATE_HISTORY } from "./merchTypes";

const initialState = {
  purchaseHistory: [],
};

const merchReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_HISTORY:
      return {
        ...state,
        purchaseHistory: [...state.purchaseHistory, action.payload],
      };
    default:
      return state;
  }
};

export default merchReducer;
