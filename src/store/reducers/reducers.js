import { combineReducers } from "redux";
import ListingsReducer from "./listingsReducer";

const rootReducer = combineReducers({
  listings: ListingsReducer,
});

export default rootReducer;
