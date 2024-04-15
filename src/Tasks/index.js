import React from "react";
import "./style.css";
import { List, Item } from "./styled";
 
const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <List>
        {tasks.map(task => (
            <Item
                key={task.id}
                hidden={task.done && hideDone}
            >
                <button
                    className="tasks__button tasks__button--toggleDone"
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✔" : ""}
                </button>
                <p className={`${task.done ? "tasks__done" : ""}`}>
                    {task.content}
                </p>
                <button
                    className="tasks__button tasks__button--remove"
                    onClick={() => removeTask(task.id)}
                >
                    🗑
                </button>
            </Item>
        ))}
    </List>
);

export default Tasks;