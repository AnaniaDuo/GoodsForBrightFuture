import axios from "axios";

//ACTION TYPE
const SET_LOCATIONS = "SET_LOCATIONS";
const ADD_LOCATION = "ADD_LOCATION";

//ACTION CREATOR
export const setLocations = (locations) => {
  return {
    type: SET_LOCATIONS,
    locations,
  };
};

export const _addLocation = (location) => {
  return {
    type: ADD_LOCATION,
    location,
  };
};
//THUNK
export const fetchLocations = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/locations");
      dispatch(setLocations(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addLocation = (location) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/api/locations", location);
      dispatch(_addLocation(data));
    } catch (error) {
      console.log(error);
    }
  };
};
//REDUCER
const initialState = [];

export default function locationsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOCATIONS:
      return action.locations;
    case ADD_LOCATION:
      return [...state, action.location];
    default:
      return state;
  }
}
