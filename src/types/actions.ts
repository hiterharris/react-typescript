import { Count } from "./Count";

// action strings
export const SET_COUNT = "SET_COUNT";

export interface SetCountAction {
  type: typeof SET_COUNT;
  count: Count;
}

export type CountActionTypes = SetCountAction;

export type AppActions = CountActionTypes;
