import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import logger from "redux-logger";
import { countReducer } from "../reducers";
import { AppActions } from "../types/actions";

export const rootReducer = combineReducers({
  count: countReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk as ThunkMiddleware<AppState, AppActions>),
);
