import React from "react";
import { useTasks } from "./useTasks";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from './GlobalStyle';


function App() {

    const {
        hideDone,
        tasks,
        toggleHideDone,
        removeTask,
        toggleTaskDone,
        setAllDone,
        addNewTask
    } = useTasks();

    
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
        <Container>
            <Header title="Lista zadań" />
            <Section
                title="Dodaj nowe zadanie"
                body={<Form addNewTask={addNewTask} />}
            />

            <Section
                title="Lista Zadań"
                body={
                    <Tasks
                        tasks={tasks}
                        hideDone={hideDone}
                        removeTask={removeTask}
                        toggleTaskDone={toggleTaskDone}
                    />
                }
                extraHeaderContent={
                    <Buttons
                        tasks={tasks}
                        hideDone={hideDone}
                        toggleHideDone={toggleHideDone}
                        setAllDone={setAllDone}
                    />}
            />

        </Container>
        </ThemeProvider>
    );
}

export default App;
