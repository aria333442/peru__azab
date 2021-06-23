import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Thunk from "redux-thunk";
import RootReducer from "../reducer.js";

const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(Thunk))
);

export default store;
