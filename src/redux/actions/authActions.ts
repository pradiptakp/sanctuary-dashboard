import { createAction, createAsyncAction } from "typesafe-actions";
import { UserData } from "../../types";

export const setUser = createAction("SET_USER", (user?: UserData) => user)();

export const postLogin = createAsyncAction(
  "POST_LOGIN_REQUEST",
  "POST_LOGIN_SUCCESS",
  "POST_LOGIN_ERROR"
)<
  {
    data: {
      username: string;
      password: string;
    };
    onSuccess: (res: UserData) => void;
    onFailure: () => void;
  },
  any,
  any
>();

export const postLogout = createAction(
  "POST_LOGIN",
  (payload: { onSuccess: () => void; onFailure: () => void }) => payload
);
