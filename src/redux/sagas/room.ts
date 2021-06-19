import { takeLatest } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import {
  deleteRoom,
  getRoom,
  getRooms,
  postRoom,
  updateRoom,
} from "../actions/roomActions";
import { INDEX_ROOM, STORE_ROOM, DELETE_ROOM, UPDATE_ROOM } from "../../apis";
import { Room } from "../../types";

function* getRoomsSaga({ payload }: ReturnType<typeof getRooms.request>) {
  try {
    const response: AxiosResponse<Room[]> = yield axios.get(INDEX_ROOM);

    payload.onSuccess(response.data);
  } catch (err: any) {
    console.error(err.response);
    payload.onFailure();
  }
}

function* getRoomSaga({ payload }: ReturnType<typeof getRoom.request>) {
  try {
    const response: AxiosResponse<Room> = yield axios.get(
      `${INDEX_ROOM}/${payload.id}`
    );
    payload.onSuccess(response.data);
  } catch (err: any) {
    console.error(err.response);
    payload.onFailure(err.response.data);
  }
}

function* postRoomSaga({ payload }: ReturnType<typeof postRoom.request>) {
  try {
    yield axios.post(STORE_ROOM, payload.data);

    payload.onSuccess();
  } catch (err: any) {
    console.error(err.response);
    payload.onFailure();
  }
}

function* updateRoomSaga({ payload }: ReturnType<typeof updateRoom.request>) {
  try {
    yield axios.put(UPDATE_ROOM + payload.id, payload.data);

    payload.onSuccess();
  } catch (err: any) {
    console.error(err.response);
    payload.onFailure();
  }
}

function* deleteRoomSaga({ payload }: ReturnType<typeof deleteRoom.request>) {
  try {
    yield axios.delete(DELETE_ROOM + payload.id);

    payload.onSuccess();
  } catch (err: any) {
    console.error(err.response);
    payload.onFailure(err.response.data);
  }
}

export default function* room() {
  yield takeLatest(getRooms.request, getRoomsSaga);
  yield takeLatest(getRoom.request, getRoomSaga);
  yield takeLatest(postRoom.request, postRoomSaga);
  yield takeLatest(updateRoom.request, updateRoomSaga);
  yield takeLatest(deleteRoom.request, deleteRoomSaga);
}
