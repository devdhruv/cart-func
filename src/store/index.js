import { createStore, applyMiddleware, combineReducers } from "redux";
import freeze from "redux-freeze";

import thunkMiddleware from "redux-thunk";
import modeReducer from "./reducers/index";
import cartReducer from "./reducers/cart";

import { composeWithDevTools } from "redux-devtools-extension";

const appReducer = combineReducers({
  darkMode: modeReducer,
  cartReducer,
});

function configureStore(preloadedState) {
  const middlewares = [];
  if (process.env.NODE_ENV === "development") {
    middlewares.push(/* loggerMiddleware, */ freeze);
  }
  return createStore(
    appReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(...middlewares, thunkMiddleware))
  );
}

export default configureStore();
