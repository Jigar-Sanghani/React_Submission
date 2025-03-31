import {
  ADD_ROOM_REQUEST,
  ADD_ROOM_SUCCESS,
  ADD_ROOM_FAILURE,
  GET_ROOMS_REQUEST,
  GET_ROOMS_SUCCESS,
  GET_ROOMS_FAILURE,
} from "./Actiontype";

const initialState = {
  rooms: [],
  loading: false,
  error: null,
};

const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROOM_REQUEST:
    case GET_ROOMS_REQUEST:
      return { ...state, loading: true, error: null };

    case ADD_ROOM_SUCCESS:
      return {
        ...state,
        loading: false,
        rooms: [...state.rooms, action.payload],
      };

    case GET_ROOMS_SUCCESS:
      return {
        ...state,
        loading: false,
        rooms: action.payload,
      };

    case ADD_ROOM_FAILURE:
    case GET_ROOMS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default roomReducer;
