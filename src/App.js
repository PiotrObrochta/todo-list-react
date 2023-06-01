import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";

const tasks = [
    { id: 1, content: "przejść na Reacta", done: false },
    { id: 2, content: "zjeść obiad", done: true },
];

const hideDoneTasks = false;

function App() {
    return (
        <main className="container">
            <header>
                <h1>Lista zadań</h1>
            </header>
            <section className="section">
                <h2 className="section__header">Dodaj nowe zadanie</h2>
                <div className="section__body">
                    <Form />
                </div>
            </section>
            <section className="section">
                <header className="section__taskListTitleButtons">
                    <h2 className="section__header">Lista zadań</h2>
                    <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
                </header>
                <div className="section__body">
                    <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
                </div>
            </section>
        </main >
    );
}

export default App;
