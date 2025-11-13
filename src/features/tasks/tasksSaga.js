import { put, call, takeLatest, takeEvery, select } from "redux-saga/effects";
import { fetchExampleTasks, selectTasksState, setTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTask";

function* fetchExampleTasksHandler() {
  try {
    const exampleTask = yield call(getExampleTasks);
    yield put(setTasks(exampleTask));
  } catch (error) {
    yield call(alert, "Coś poszło nie tak!");
  }
}

function* saveTasksInLocalStorageHandler() {
  const tasks = yield select(selectTasksState);
  yield call(saveTasksInLocalStorageHandler, tasks);
}

export function* watchFetchExampleTasks() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}
