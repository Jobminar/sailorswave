import logo from './logo.svg';
import './App.css';
import Signup from "../src/pages/Login/Signup.jsx";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from './pages/HomePage/Home';
import ApplicationPage from './pages/ApplicationPage/ApplicationPage.jsx';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/> }/>
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
