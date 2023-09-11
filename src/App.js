import logo from './logo.svg';
import './App.css';
import LandingPage from './Components/LandingPage';
import NoMatch from './Components/NoMatch';
import { Routes,Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import RegisterationPage from './Components/RegisterationPage';
import ForgotPassword from './Components/ForgotPassword';
import Blogs from './Components/Blogs';
import CreateBlog from './Components/CreateBlog';
import { useState } from 'react';
import { blogsCards } from './data';
import ViewBlog from './Components/ViewBlog';

function App() {

// Hook: send the new blogs from CreateBlog to Blogs to render
const [newBlogs, getNewBlogs] = useState(blogsCards);
console.log(newBlogs);

var testObject = [...newBlogs, newBlogs[newBlogs.length-1]];


  return (
    <div>
      {/* Route structure */}
      <Routes>
        {/* Root route; route for landing page */}
        <Route path='/' element={<LandingPage/>}></Route>

        {/* Route for Login page */}
        <Route path='login' element={<LoginPage/>}></Route>

        {/* Route for Registration Page */}
        <Route path='registration' element={<RegisterationPage newBlogs={newBlogs}/>}></Route>

        {/* Route for forgot password */}
        <Route path='forgot-password' element={<ForgotPassword/>}></Route>

        {/* Route for blogs page */}
        <Route path='blogs' element={<Blogs newBlogs={newBlogs}/>}>
          
        </Route>

        {/* Route for create blog page */}
        <Route path='create-blog' element={<CreateBlog getNewBlogs={getNewBlogs} newBlogs={newBlogs}/>}></Route>

        {/* Route for view blog page */}
        <Route path='view-blog/:blogID' element={<ViewBlog testObject={testObject}/>}></Route>

        {/* No match route */}
        <Route path='*' element={<NoMatch/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
