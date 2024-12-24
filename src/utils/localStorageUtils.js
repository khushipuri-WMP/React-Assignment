// Function to get stored todos from localStorage
export function getStoredTodos() {
    let data = localStorage.getItem("todos");
    let json = JSON.parse(data);
    return json ? json : [];
}
