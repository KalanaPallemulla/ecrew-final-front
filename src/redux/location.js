/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
import { GET_LOCATIONS_SUCCESS, GET_LOCATIONS_FAIL } from "../actions/types";

const initialState = {
  locations: [],
  locationsLoading: true,
  error: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_LOCATIONS_SUCCESS:
      return {
        locations: payload,
        locationLoading: false,
        error: null,
      };
    case GET_LOCATIONS_FAIL:
      return {
        error: payload,
        locationLoading: false,
      };

    default:
      return state;
  }
}
