import React from "react";
import { ButtonWrapper, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <ButtonWrapper>
    {tasks.length > 0 && (
        <>
            <Button onClick={toggleHideDone}>
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </Button>
            <Button>
                onClick={setAllDone}
                disabled={tasks.every(({ done }) => done)}
            
                Ukończ wszystkie
            </Button>
        </>
    )}
    </ButtonWrapper>
);

export default Buttons;