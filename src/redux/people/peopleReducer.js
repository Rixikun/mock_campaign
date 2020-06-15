import {
  FETCH_PEOPLE_REQUEST,
  FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_FAILURE,
} from "./peopleTypes";

const initialState = {
  loading: false,
  people: [],
  error: "",
};

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PEOPLE_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_PEOPLE_SUCCESS: {
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    }
    case FETCH_PEOPLE_FAILURE: {
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default peopleReducer;
