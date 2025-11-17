import Form from "./Form";
import TaskList from "./TaskList";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Container } from "../../../common/Container";
import Search from "./Search";
import GetExampleTasksButton from "./GetExampleTasksButton";

function TasksPage() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={<GetExampleTasksButton />}
      />
      <Section title="Wyszukiwarka" body={<Search />} />
      <Section title="Lista zadań" body={<TaskList />} />
    </Container>
  );
}

export default TasksPage;
