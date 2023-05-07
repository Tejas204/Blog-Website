import logo from './logo.svg';
import './App.css';
import LandingPage from './Components/LandingPage';
import NoMatch from './Components/NoMatch';
import { Routes,Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage';

function App() {
  return (
    <div>
      {/* Route structure */}
      <Routes>
        {/* Root route; route for landing page */}
        <Route path='/' element={<LandingPage/>}></Route>

        {/* Route for Login page */}
        <Route path='login' element={<LoginPage/>}></Route>

        {/* No match route */}
        <Route path='*' element={<NoMatch/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
