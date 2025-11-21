import {
  put,
  call,
  takeLatest,
  takeEvery,
  select,
  delay,
} from "redux-saga/effects";
import {
  fetchExampleTasks,
  selectTasks,
  fetchExampleTasksSucces,
  fetchExampleTasksError,
} from "./tasksSlice";
import { getExampleTasks } from "./getExampleTask";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
  try {
    yield delay(1000);
    const exampleTask = yield call(getExampleTasks);
    yield put(fetchExampleTasksSucces(exampleTask));
  } catch (error) {
    yield put(fetchExampleTasksError());
    yield call(alert, "Coś poszło nie tak!");
  }
}

function* saveTasksInLocalStorageHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}
