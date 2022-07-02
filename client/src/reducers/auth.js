import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  AUTH_ERROR,
  LOAD_USER,
} from "../actions/types";

const initialState = {
  session: localStorage.getItem("session"),
  isAuthenticated: null,
  loading: true,
  user: null,
};
function authReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_USER:
      localStorage.getItem("session");
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    //case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.getItem("session");
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    //case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem("session");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };

    default:
      return state;
  }
}

export default authReducer;
