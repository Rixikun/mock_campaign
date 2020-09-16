import { BUY_SHIRT } from "./shirtTypes";

const initialState = {
  name: "shirts",
  numOfShirts: 100,
  size: "",
  boughtShirts: 0,
};

const shirtReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_SHIRT:
      return {
        ...state,
        numOfShirts: state.numOfShirts - action.payload.num,
        size: action.payload.size,
        boughtShirts: action.payload.num,
      };

    default:
      return state;
  }
};

export default shirtReducer;
