import { takeLatest } from "redux-saga/effects";
import { fetchCompile } from "../actions/compileActions";
import axios, { AxiosResponse } from "axios";
import { compileApi } from "../../apis";

function* compileSaga({ payload }: ReturnType<typeof fetchCompile.request>) {
  try {
    const phpFile = new Blob([payload.code], {
      type: "text/php",
    });

    const data = new FormData();
    data.append("file", phpFile);
    data.append("prog_language", payload.progLanguage);

    const response: AxiosResponse<string> = yield axios.post(compileApi, data);

    payload.onSuccess(response.data);
  } catch (err) {
    payload.onFailure(err);
  }
}

export default function* compiles() {
  yield takeLatest(fetchCompile.request, compileSaga);
}
