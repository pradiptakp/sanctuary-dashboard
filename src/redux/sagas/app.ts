import { takeLatest } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import { GET_DASHBOARD_INFO } from "../../apis";
import { getDashboardInfo } from "../actions/appActions";
import { DashboardData } from "../../types";

function* getDashboardSaga({
  payload,
}: ReturnType<typeof getDashboardInfo.request>) {
  try {
    const response: AxiosResponse<DashboardData> = yield axios
      .get<DashboardData>(GET_DASHBOARD_INFO)
      .then((res) => res);

    payload.onSuccess(response.data);
  } catch (err: any) {
    console.error(err.response);
    payload.onFailure();
  }
}

export default function* app() {
  yield takeLatest(getDashboardInfo.request, getDashboardSaga);
}
