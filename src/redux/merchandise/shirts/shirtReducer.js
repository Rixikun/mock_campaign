import { BUY_SHIRT } from "./shirtTypes";

const initialState = {
  name: "shirts",
  numOfShirts: 100,
};

const shirtReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_SHIRT:
      return {
        ...state,
        numOfShirts: state.numOfShirts - action.num,
      };

    default:
      return state;
  }
};

export default shirtReducer;
