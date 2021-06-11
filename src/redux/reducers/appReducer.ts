import { setStoreState, toggleDarkMode } from "../actions/appActions";
import { createReducer } from "typesafe-actions";
import { AppAction } from "../actions/actionTypes";
import { Device } from "../../types";

export interface AppReducerState {
  version: string;
  dark: boolean;
  recentDevices: Device[];
}

const initialState: AppReducerState = {
  version: "1.0.0",
  dark: false,
  recentDevices: [],
};

const appReducer = createReducer<AppReducerState, AppAction>(initialState)
  .handleAction(setStoreState, (state, action) =>
    Object.assign({}, initialState, state, action.payload)
  )
  .handleAction(toggleDarkMode, (state, action) => ({
    ...state,
    dark: action.payload,
  }));

export default appReducer;
