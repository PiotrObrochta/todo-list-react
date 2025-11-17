import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../../tasksSlice";
import { Button } from "../Buttons/styled";

const GetExampleTasksButton = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    dispatch(fetchExampleTasks());

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <Button onClick={handleClick} disabled={loading}>
      {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
    </Button>
  );
};

export default GetExampleTasksButton;
