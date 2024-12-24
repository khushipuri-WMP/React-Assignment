// import React, { useEffect, useState } from "react";
// import { getStoredTodos } from "../../utils/localStorageUtils";  // Import the function from utils
// import TaskInput from "./component/TaskInput";
// import TaskList from "./component/TaskList";

// function Todocom() {
//     const [todos, setTodos] = useState(getStoredTodos());
//     const [filter, setFilter] = useState("all");

//     // Save updated todos to localStorage
//     useEffect(() => {
//         localStorage.setItem("todos", JSON.stringify(todos));
//     }, [todos]);

//     // Add a new task
//     function handleAddTask(task) {
//         setTodos((prev) => [
//             ...prev,
//             { id: Date.now(), task: task, completed: false },
//         ]);
//     }

//     // Toggle task completion status
//     function handleChangeTaskStatus(id) {
//         setTodos((prev) =>
//             prev.map((todo) =>
//                 todo.id === id ? { ...todo, completed: !todo.completed } : todo
//             )
//         );
//     }

//     // Delete a task
//     const deleteTodo = (id) => {
//         setTodos((prev) => prev.filter((todo) => todo.id !== id));
//     };

//     return (
//         <div className="container my-5 d-flex align-items-center justify-content-center">
//             <div className="mx-auto rounded shadow-lg border p-4 mt-10 primary-card-color w-600">
//                 <h2 className="text-white text-center mb-5">Todo List</h2>
//                 <div className="text-center mb-4">
//                     <button
//                         className="btn btn-light mx-2 mt-2"
//                         onClick={() => setFilter("all")}
//                     >
//                         View All
//                     </button>
//                     <button
//                         className="btn btn-success mx-2 mt-2"
//                         onClick={() => setFilter("completed")}
//                     >
//                         Completed
//                     </button>
//                     <button
//                         className="btn btn-warning mx-2 mt-2"
//                         onClick={() => setFilter("pending")}
//                     >
//                         Pending
//                     </button>
//                 </div>

//                 <TaskInput onAddTask={handleAddTask} />
//                 <TaskList
//                     tasks={todos}
//                     filter={filter}
//                     onChangeStatus={handleChangeTaskStatus}
//                     onDeleteTask={deleteTodo}
//                 />
//             </div>
//         </div>
//     );
// }

// export default Todocom;


import React, { useEffect, useState } from "react";
import { getStoredTodos } from "../../utils/localStorageUtils";  // Import the function from utils
import TaskInput from "./component/TaskInput";
import TaskList from "./component/TaskList";

function Todocom() {
    const [todos, setTodos] = useState(getStoredTodos());
    const [filter, setFilter] = useState("all");
    const [errorMessage, setErrorMessage] = useState("");  // Add error message state

    // Save updated todos to localStorage
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    // Validation function for tasks
    function validateTask(task) {
        const minLength = 3;
        const invalidChars = /[^a-zA-Z0-9\s]/; // Regex to check for special characters

        if (task.length < minLength) {
            return "Task must be at least 3 characters long.";
        }

        if (invalidChars.test(task)) {
            return "Task contains invalid characters.";
        }

        return ""; // No error
    }

    // Add a new task
    function handleAddTask(task) {
        const error = validateTask(task);
        if (error) {
            setErrorMessage(error);  // Set the error message
            return;
        }

        setTodos((prev) => [
            ...prev,
            { id: Date.now(), task: task, completed: false },
        ]);
        setErrorMessage("");  // Clear the error message
    }

    // Toggle task completion status
    function handleChangeTaskStatus(id) {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }

    // Delete a task
    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    return (
        <div className="container my-5 d-flex align-items-center justify-content-center">
            <div className="mx-auto rounded shadow-lg border p-4 mt-10 primary-card-color w-600">
                <h2 className="text-white text-center mb-5">Todo List</h2>
                <div className="text-center mb-4">
                    <button
                        className="btn btn-light mx-2 mt-2"
                        onClick={() => setFilter("all")}
                    >
                        View All
                    </button>
                    <button
                        className="btn btn-success mx-2 mt-2"
                        onClick={() => setFilter("completed")}
                    >
                        Completed
                    </button>
                    <button
                        className="btn btn-warning mx-2 mt-2"
                        onClick={() => setFilter("pending")}
                    >
                        Pending
                    </button>
                </div>

                <TaskInput onAddTask={handleAddTask} />
                
                {/* Show error message if validation fails */}
                {errorMessage && (
                    <div className="alert alert-danger text-center mt-3">
                        {errorMessage}
                    </div>
                )}

                <TaskList
                    tasks={todos}
                    filter={filter}
                    onChangeStatus={handleChangeTaskStatus}
                    onDeleteTask={deleteTodo}
                />
            </div>
        </div>
    );
}

export default Todocom;
