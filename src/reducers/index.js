import { combineReducers } from "redux";

import accountReducer from "./accountReducer";
import turnReducer from "./turnReducer";


export default combineReducers({
  accounts: accountReducer,
  turn: turnReducer
});