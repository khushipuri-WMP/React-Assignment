import React from "react";

function TaskList({ tasks, filter, onChangeStatus, onDeleteTask }) {
    const filterTasks = () => {
        if (filter === "completed") {
            return tasks.filter((todo) => todo.completed);
        } else if (filter === "pending") {
            return tasks.filter((todo) => !todo.completed);
        }
        return tasks; // Default: show all tasks
    };

    return (
        <div>
            {filterTasks().map((todo) => (
                <div
                    key={todo.id}
                    className="rounded mt-4 p-2 d-flex text-wrap"
                    style={{ backgroundColor: todo.completed ? "#87FC68" : "lightgray" }}
                >
                    <div className="task-text me-auto" style={{ maxWidth: "80%" }}>{todo.task}</div>
                    <div>
                        <i
                            className={`h5 me-2 ${
                                todo.completed ? "bi bi-check-circle" : "bi bi-circle"
                            }`}
                            style={{ cursor: "pointer" }}
                            onClick={() => onChangeStatus(todo.id)} // Toggle task completion
                        ></i>
                        <i
                            className="bi bi-trash-fill text-danger h5"
                            style={{ cursor: "pointer" }}
                            onClick={() => onDeleteTask(todo.id)} // Delete task
                        ></i>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TaskList;
