import React, { useState } from "react";

function TaskInput({ onAddTask }) {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task.trim()) {
            return; // Do nothing if the task is empty
        }
        onAddTask(task);
        setTask(""); // Clear the input after submitting
    };

    return (
        <form className="d-flex" onSubmit={handleSubmit}>
            <input
                className="form-control me-2"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="New task"
                name="task"
            />
            <button className="btn btn-outline-light" type="submit">
                Add
            </button>
        </form>
    );
}

export default TaskInput;
