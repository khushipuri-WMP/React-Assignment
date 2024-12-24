import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import Navbar from './components/Navbar';      // Component for navbar
import Todocom from './Domain/Todo-list';   // Component for To-Do-List
import Data from './Domain/CountryState/Data';   // Component to show Country and State data
import Home from './Domain/Home';        // Component for Home page 
import PageNotFound from './Domain/pageNotFound/PageNotFound';      //  Component for pageNotFound
import CountryStateSelector from './Domain/CountryState';
import PostSelector from './Domain/PostSelector'; // Updated import



function App() {
  return (
    <BrowserRouter>
      {/* Navbar to be appeared on all pages */}
      < Navbar />
      {/* All the routes to navigate to different pages */}
      <Routes>
        <Route path='*' element={<PageNotFound />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/CountrySelect' element={<CountryStateSelector />}></Route>
        <Route path='/Data' element={<Data />}></Route>
        <Route path='/Todo' element={<Todocom />}></Route>
        <Route path='/postSelector' element={<PostSelector />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
