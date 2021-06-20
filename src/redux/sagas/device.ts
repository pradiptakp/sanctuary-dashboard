import { takeLatest } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import {
  deleteDevice,
  getDevices,
  postDevice,
  switchDevice,
  updateDevice,
} from "../actions/deviceActions";
import {
  DELETE_DEVICE,
  INDEX_DEVICE,
  STORE_DEVICE,
  SWITCH_DEVICE,
  UPDATE_DEVICE,
} from "../../apis";
import { Device } from "../../types";

function* getDevicesSaga({ payload }: ReturnType<typeof getDevices.request>) {
  try {
    const response: AxiosResponse<Device[]> = yield axios.get(INDEX_DEVICE);

    payload.onSuccess(response.data);
  } catch (err: any) {
    console.error(err.response);
    payload.onFailure();
  }
}

function* postDeviceSaga({ payload }: ReturnType<typeof postDevice.request>) {
  try {
    yield axios.post(STORE_DEVICE, payload.data);

    payload.onSuccess();
  } catch (err: any) {
    console.error(err.response);
    payload.onFailure();
  }
}

function* updateDeviceSaga({
  payload,
}: ReturnType<typeof updateDevice.request>) {
  try {
    yield axios.put(UPDATE_DEVICE, payload.data);

    payload.onSuccess();
  } catch (err: any) {
    console.error(err.response);
    payload.onFailure();
  }
}

function* deleteDeviceSaga({
  payload,
}: ReturnType<typeof deleteDevice.request>) {
  try {
    yield axios.delete(DELETE_DEVICE + payload.id);

    payload.onSuccess();
  } catch (err: any) {
    console.error(err.response);
    payload.onFailure();
  }
}

function* switchDeviceSaga({
  payload,
}: ReturnType<typeof switchDevice.request>) {
  try {
    yield axios.post(SWITCH_DEVICE + payload.id, payload.data);

    payload.onSuccess();
  } catch (err: any) {
    console.error(err.response);
    payload.onFailure();
  }
}
export default function* device() {
  yield takeLatest(getDevices.request, getDevicesSaga);
  yield takeLatest(postDevice.request, postDeviceSaga);
  yield takeLatest(updateDevice.request, updateDeviceSaga);
  yield takeLatest(switchDevice.request, switchDeviceSaga);
  yield takeLatest(deleteDevice.request, deleteDeviceSaga);
}
