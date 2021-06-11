import { createAction } from "typesafe-actions";

export const setUser = createAction("SET_USER", (user?: {}) => user)();
export const setToken = createAction(
  "SET_TOKEN",
  (token: string | null) => token
)();
