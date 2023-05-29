import "./style.css";

const Tasks = (props) => (
    <ul className="tasks">
        {props.tasks.map(task => (
            <li
            className={`tasks__content ${ task.done && props.hideDoneTasks ? "tasks__content--hidden" : ""}`}
            >
                <button className="tasks__button tasks__button--toggleDone">
                      {task.done ? "✔" : ""}
                    </button>
                    <p className={`${ task.done ? "tasks__done" : ""}`}>
                      {task.content}
                    </p>
                    <button className="tasks__button tasks__button--remove">
                    🗑
                    </button>
            </li>
        ))}
    </ul>
);

export default Tasks;