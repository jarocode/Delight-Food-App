import { configureStore } from "@reduxjs/toolkit";

import { loadState } from "utils";
import rootReducer from "./reducers/reducers";

const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadState(),
});

export default store;
