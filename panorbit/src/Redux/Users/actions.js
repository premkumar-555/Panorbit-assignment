const POPULATE_USERS = "POPULATE_USERS";
const SELECT_USER = "SELECT_USER";
const SIGN_OUT = "SIGN_OUT";

// Actions
const populateUsers = (payload) => ({ type: POPULATE_USERS, payload: payload });
const selectUser = (payload) => ({ type: SELECT_USER, payload: payload });
const signOut = (payload) => ({ type: SIGN_OUT, payload: payload });

export { POPULATE_USERS, SELECT_USER, SIGN_OUT };
export { populateUsers, selectUser, signOut };
