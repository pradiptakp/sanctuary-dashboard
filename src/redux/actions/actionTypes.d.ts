import { ActionType } from "typesafe-actions";
import * as appActions from "./appActions";
import * as authActions from "./authActions";
import * as compileActions from "./compileActions";

export type AppAction = ActionType<typeof appActions>;
export type CompileAction = ActionType<typeof compileActions>;
export type AuthAction = ActionType<typeof authActions>;

export type RootAction = AppAction | AuthAction;
