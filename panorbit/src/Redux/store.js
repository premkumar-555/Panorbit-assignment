import { createStore } from "redux";
import usersReducer from "./Users/reducer";

// store
const Store = createStore(usersReducer);

export default Store;
