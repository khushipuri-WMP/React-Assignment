# Practical Website

This project is about building a React application that combines different pieces, called components, to create a complete user interface. The app can handle data dynamically, meaning it updates automatically when new data comes in, without needing a page refresh.  


## The application features three main components:

- To-Do List: Allows users to add, mark as complete, delete, and filter tasks by their status (All, Completed, Pending).

- Country and State Selector: Displays a dropdown for selecting Country, dynamically updates a second dropdown with states based on the selected country, and shows the selected Country and State.

- Post Selector: Fetches posts from the https://jsonplaceholder.typicode.com/posts API and displays post details (title and body) upon selection.


## The project demonstrates effective use of:

- API integration with axios and global interceptors.
- Modular and reusable React components.
- Styled and responsive UI using Bootstrap.


## Features

#### To-Do List:

- Add tasks with an input field.
- Mark tasks as completed or delete them.
- Filter tasks based on their status (All, Completed, Pending).
- State and City Selector:


#### Select a Country and State from a dropdown list.

- Dynamically update the list of state based on the selected country.
- Display the selected Country and State.


#### Post Selector:

- Fetch a list of posts from jsonplaceholder.typicode.com.
- Show the title and body of a post upon selection.
- Setup Instructions


## Clone the repository to your local machine:

- git clone:  <https://github.com/khushipuri-WMP/React-Assignment.git


## Install the required dependencies:

- cd practical-website
- npm install


## Run the application in development mode:

- npm run dev


## Key Technologies

- React: Frontend JavaScript library for building the user interface.
- Axios: Used for making HTTP requests to APIs with a global interceptor to handle common settings and error handling.
- Bootstrap: Provides responsive and modern styling for the UI.
- Vite: A fast development server and build tool for React applications.


## Key Learnings

- How to handle API requests and responses using axios interceptors.
- The importance of modular components and state management in React.
- Implementing dynamic and conditional rendering in React.
- Styling React components using Bootstrap for a responsive, mobile-friendly design.


## Dependencies

- axios: HTTP client for making requests.
- react: JavaScript library for building user interfaces.
- react-router-dom: For routing between components.
- bootstrap: Styling framework for building responsive UI.
- json-server: For setting up a mock API.
