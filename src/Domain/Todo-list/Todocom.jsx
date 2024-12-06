import { useEffect, useState } from "react"

// component for the To-Do-List
function Todocom() {

    // Function to store the data to the local storage
    function getStoredTodos() {
        let data = localStorage.getItem("todos")
        let json = JSON.parse(data)
        console.log(data);
        if (json) {
            return json
        }
        return []
    }

    // Defining the states 
    const [todos, setTodos] = useState(getStoredTodos())
    const [filter, setFilter] = useState("all")
    const [errorMessage, setErrorMessage] = useState("");

    // useEffect sets the items when the component renders or a data changes
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    // function to handle the on submit event
    function handleSubmit(event) {
        event.preventDefault()
        let task = event.target.task.value

        if (!task.trim()) {
            setErrorMessage("Please Enter a task.");
            return;
        }

        setTodos([...todos, { task: task, completed: false }])
        setErrorMessage("");

        event.target.reset()
    }

    // function to change the status of the task
    function changeTaskStatus(index) {
        let newTodos = [...todos]
        newTodos[index].completed = !newTodos[index].completed
        setTodos(newTodos)
    }

    // function to delete the task
    function deleteTask(index) {
        let newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    // function to filter the task wheather task is completed or not
    function filterTasks() {
        if (filter === "completed") {
            return todos.filter(todo => todo.completed)
        } else if (filter === "pending") {
            return todos.filter(todo => !todo.completed)
        }
        return todos // Default is all tasks, so gives all task list
    }

    return (
        // Main container for layout
        <div className="container my-5 d-flex align-items-center justify-content-center">
            <div className=" mx-auto rounded shadow-lg border p-4 mt-10 primary-card-color w-600" >
                <h2 className="text-white text-center mb-5">Todo List</h2>
                <div className="text-center mb-4">
                    <button className="btn btn-light mx-2 mt-2" onClick={() => setFilter("all")}>View All</button>
                    <button className="btn btn-success mx-2 mt-2" onClick={() => setFilter("completed")}>Completed</button>
                    <button className="btn btn-warning mx-2 mt-2" onClick={() => setFilter("pending")}>Pending</button>
                </div>

                {/*  Form to add the task  */}
                <form className="d-flex" onSubmit={handleSubmit}>
                    <input className="form-control me-2" placeholder="New task" name="task" />
                    <button className="btn btn-outline-light" type="submit">Add</button>
                </form>

                {/* Error message if submitting without a adding a task */}
                {errorMessage && (   
                    <p className="text-white mt-2">{errorMessage}</p>
                )}

                {/* iterating through the filtered list of task */}
                {
                    filterTasks().map((todo, index) => {
                        return (
                            <div key={index} className="rounded mt-4 p-2 d-flex" style={{ backgroundColor: todo.completed ? "#87FC68" : "lightgray" }}>
                                <div className="me-auto">
                                    {todo.task}
                                </div>
                                <div>
                                    <i className={"h5 me-2 " + (todo.completed ? "bi bi-check-circle" : "bi bi-circle")} style={{ cursor: "pointer" }} onClick={() => changeTaskStatus(index)}></i>
                                    <i className="bi bi-trash-fill text-danger h5" style={{ cursor: "pointer" }} onClick={() => deleteTask(index)}></i>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Todocom;