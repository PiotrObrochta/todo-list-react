import { useSelector, useDispatch } from "react-redux";
import {
  selectTasksState,
  toggleHideDone,
  setAllDone,
  selectAllTasksDone,
  fetchExampleTasks,
} from "../../tasksSlice";
import { ButtonWrapper, Button } from "./styled";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasksState);
  const dispatch = useDispatch();
  const allDone = useSelector(selectAllTasksDone);

  return (
    <ButtonWrapper>
      <Button onClick={() => dispatch(fetchExampleTasks())}>
        Pobierz przykładowe zadania
      </Button>
      {tasks.length > 0 && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button onClick={() => dispatch(setAllDone())} disabled={allDone}>
            Ukończ wszystkie
          </Button>
        </>
      )}
    </ButtonWrapper>
  );
};

export default Buttons;
