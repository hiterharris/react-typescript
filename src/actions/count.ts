import { Count } from "../types/Count";
import {
  SET_COUNT,
  AppActions,
} from "../types/actions";
import { Dispatch } from "redux";
import { AppState } from "../store/configureStore";

export const setCount = (count: Count): AppActions => ({
    type: SET_COUNT,
    count
  });
  
  export const startSetExpenses = (count: Count) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
      dispatch(setCount(count));
    };
  };
  