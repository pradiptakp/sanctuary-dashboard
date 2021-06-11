import { all } from "redux-saga/effects";
import compiles from "./compiles";
import modules from "./modules";

export default function* root() {
  yield all([compiles(), modules()]);
}
