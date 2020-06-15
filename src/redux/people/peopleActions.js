import axios from "axios";
import {
  FETCH_PEOPLE_REQUEST,
  FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_FAILURE,
} from "./peopleTypes";

export const fetchPeopleRequest = () => {
  return {
    type: FETCH_PEOPLE_REQUEST,
  };
};
export const fetchPeopleSuccess = (people) => {
  return {
    type: FETCH_PEOPLE_SUCCESS,
    payload: people,
  };
};
export const fetchPeopleFailure = (error) => {
  return {
    type: FETCH_PEOPLE_FAILURE,
    payload: error,
  };
};

//special action creator bc thunk -- returns fn, not action
export const fetchPeople = () => {
  //takes dispatch as param
  return async (dispatch) => {
    //request data -- People list
    try {
      dispatch(fetchPeopleRequest);
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      const people = res.data;
      dispatch(fetchPeopleSuccess(people));
    } catch (err) {
      dispatch(fetchPeopleFailure(err.message));
    }
  };
};
