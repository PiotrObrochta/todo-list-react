import { takeEvery, put, call } from "redux-saga/effects";
import { fetchExampleTasks, setTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTask";

function* fetchExampleTasksHandler() {
  try {
    const exampleTask = yield call(getExampleTasks);
    yield put(setTasks(exampleTask));
  } catch (error) {
    yield call(alert, "Coś poszło nie tak!");
  }
}

export function* watchFetchExampleTasks() {
  console.log("Saga działa");
  yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
}
