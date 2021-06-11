import { createReducer } from "typesafe-actions";
import { AuthAction } from "../actions/actionTypes";
import { setUser, setToken } from "../actions/authActions";

export interface AuthState {
  user?: {};
  token?: string | null;
}

const initialState: AuthState = {};

const authReducer = createReducer<AuthState, AuthAction>(initialState)
  .handleAction(setUser, (state, action) => ({
    ...state,
    user: action.payload,
  }))
  .handleAction(setToken, (state, action) => ({
    ...state,
    token: action.payload,
  }));

export default authReducer;
