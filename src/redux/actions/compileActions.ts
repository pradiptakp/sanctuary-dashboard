import { createAsyncAction } from "typesafe-actions";

/**
 * Shallow merge new state with current app reducer state and initial state
 * Useful to update persistor state when reducer has new params
 *
 * @param state params of the app reducer
 */

export const fetchCompile = createAsyncAction(
  "COMPILE_REQUEST",
  "COMPILE_SUCCESS",
  "COMPILE_ERROR"
)<
  {
    code: string;
    progLanguage: string;
    onSuccess: (res: string) => void;
    onFailure: (err: Error) => void;
  },
  string,
  Error
>();
