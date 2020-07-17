import { Count } from "./Count";

export const SET_COUNT = "SET_COUNT";
export const INCREMENT = "INCREMENT";

export interface SetCountAction {
  type: typeof SET_COUNT;
  count: Count;
}

export interface SetIncrementAction {
  type: typeof INCREMENT;
  count: Count;
}

export type CountActionTypes = SetCountAction | SetIncrementAction;

export type AppActions = CountActionTypes;
