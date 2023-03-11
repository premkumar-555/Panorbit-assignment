import { POPULATE_USERS, SELECT_USER, SIGN_OUT } from "./actions";

// initial state object
const initState = {
  usersList: [],
  userLogged: JSON.parse(localStorage.getItem("user")) || null,
  isUserLoggedIn: JSON.parse(localStorage.getItem("status")) || false,
};

// reducer function
const usersReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case POPULATE_USERS:
      state = { ...state, usersList: [...payload] };
      return state;
      break;
    case SELECT_USER:
      localStorage.setItem("user", JSON.stringify({ ...payload }));
      localStorage.setItem("status", JSON.stringify(true));
      state = { ...state, userLogged: { ...payload }, isUserLoggedIn: true };
      return state;
      break;
    case SIGN_OUT:
      localStorage.clear();
      state = { ...state, userLogged: null, isUserLoggedIn: false };
      return state;
      break;
    default:
      return state;
      break;
  }
};

export default usersReducer;
