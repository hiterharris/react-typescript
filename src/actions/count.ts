import { Count } from "../types/Count";
import {
  SET_COUNT,
  INCREMENT,
  AppActions,
} from "../types/actions";
import { Dispatch } from "redux";
import { AppState } from "../store/configureStore";

export const setCount = (count: Count): AppActions => ({
    type: SET_COUNT,
    count
  });

export const setIncrement = (count: Count): AppActions => ({
  type: INCREMENT,
  count
});

export const startSetCount = (count: Count) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(setCount(count));
  };
};

export const startIncrement = (count: Count) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(setIncrement(count));
  };
};

  