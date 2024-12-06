import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import Navbar from './components/Navbar';      // Component for navbar
import Todo from './Domain/Todo-list/Todocom';    // Component for To-Do-List
import Data from './Domain/CountryState/Data';   // Component to show Country and State data
import Post from './Domain/PostSelector';       // Component for post selector
import Home from './Domain/Home';        // Component for Home page 
import CountryStateMain from './Domain/CountryState';       //  Component for Country and state selection
import PageNotFound from './Domain/pageNotFound/PageNotFound';      //  Component for pageNotFound


function App() {
  return (
    <BrowserRouter>
      {/* Navbar to be appeared on all pages */}
      < Navbar />
      {/* All the routes to navigate to different pages */}
      <Routes>
        <Route path='*' element={<PageNotFound />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/CountrySelect' element={<CountryStateMain />}></Route>
        <Route path='/Data' element={<Data />}></Route>
        <Route path='/Todo' element={<Todo />}></Route>
        <Route path='/Post' element={<Post />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
