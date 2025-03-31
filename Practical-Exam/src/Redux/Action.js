import axios from "axios";
import {
  ADD_ROOM_REQUEST,
  ADD_ROOM_SUCCESS,
  ADD_ROOM_FAILURE,
  GET_ROOMS_REQUEST,
  GET_ROOMS_SUCCESS,
  GET_ROOMS_FAILURE,
} from "./Actiontype";

const API_URL = "http://localhost:3000/rooms";

// Add a new room
export const addRoom = (roomData) => async (dispatch) => {
  dispatch({ type: ADD_ROOM_REQUEST });

  try {
    const response = await axios.post(API_URL, roomData);
    dispatch({ type: ADD_ROOM_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: ADD_ROOM_FAILURE, payload: error.message });
  }
};

// Fetch all rooms
export const getRooms = () => async (dispatch) => {
  dispatch({ type: GET_ROOMS_REQUEST });

  try {
    const response = await axios.get(API_URL);
    dispatch({ type: GET_ROOMS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_ROOMS_FAILURE, payload: error.message });
  }
};
