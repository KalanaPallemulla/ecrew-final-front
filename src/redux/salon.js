/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
import { GET_ALL_SALONS_SUCCESS, GET_ALL_SALONS_ERROR } from "../actions/types";

const initialState = {
  salons: [],
  salonLoading: true,
  error: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_SALONS_SUCCESS:
      return {
        salons: payload,
        salonLoading: false,
      };
    case GET_ALL_SALONS_ERROR:
      return {
        error: payload,
        salonLoading: false,
      };
    default:
      return state;
  }
}
