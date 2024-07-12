import logo from './logo.svg';
import './App.css';
import Signup from "../src/pages/Login/Signup.jsx";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from './pages/HomePage/Home';
<<<<<<< HEAD
import ApplicationPage from './pages/ApplicationPage/ApplicationPage.jsx';
=======
import ApplicationPage from './pages/ApplicationPage/ApplicationPage';
import Signup from './pages/Signup/Signup';
import AboutUs from './components/AboutUs/AboutUs';
>>>>>>> 898770a7360dadd7e04718f2462b15980e01d855


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/> }/>
<<<<<<< HEAD
=======
        <Route path='/About-Us' element={<AboutUs/> }/>
>>>>>>> 898770a7360dadd7e04718f2462b15980e01d855
        <Route path='/Signup' element={<Signup/> }/>
        <Route path='/ApplicationPage' element={<ApplicationPage/> }/>
        <Route />
      </Routes>
    </Router>
    <div className="App">
    </div>
    </>
  );
}

export default App;
