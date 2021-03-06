import {
  GET_ALL_SALONS_SUCCESS,
  GET_ALL_SALONS_ERROR,
  PORT,
  ADD_SALON_SUCCESS,
  ADD_SALON_FAIL,
  GET_LOCATIONS_SUCCESS,
  GET_LOCATIONS_FAIL,
  ADD_LOCATION_FAIL,
  ADD_LOCATION_SUCCESS,
} from "./types";
import axios from "axios";

export const getAllSalons = () => async (dispatch) => {
  try {
    const res = await axios.get(`${PORT}/salon`);
    console.log(res);

    if (res.status === 400) {
      dispatch({
        type: GET_ALL_SALONS_ERROR,
        payload: res.msg,
      });
    } else if (res.status === 200) {
      dispatch({
        type: GET_ALL_SALONS_SUCCESS,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log("Error =>", error);
  }
};

export const addSalon = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${PORT}/salon`, data);
    dispatch({
      type: ADD_SALON_SUCCESS,
      payload: res.data.msg,
    });
  } catch (error) {
    console.log("Error =>", error);
    if (error.response && error.response.status === 400)
      dispatch({
        type: ADD_SALON_FAIL,
        payload: error.response.data.msg,
      });
  }
};

export const getLocations = () => async (dispatch) => {
  try {
    const res = await axios.get(`${PORT}/salon/locations`);
    dispatch({
      type: GET_LOCATIONS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_LOCATIONS_FAIL,
      payload: error.response,
    });
  }
};

export const addNewLocation = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${PORT}/salon/locations`, data);
    dispatch({
      type: ADD_LOCATION_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ADD_LOCATION_FAIL,
      payload: error.response,
    });
  }
};
