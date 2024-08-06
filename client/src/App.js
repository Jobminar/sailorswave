
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from './pages/HomePage/Home';
import ApplicationPage from './pages/ApplicationPage/ApplicationPage';
import Signup from './pages/Signup/Signup';
import AboutUs from './components/AboutUs/AboutUs';
import Sample from "../src/pages/Sample/Sample";
import Verification from './pages/Signup/Verification';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/> }/>
        <Route path='/About-Us' element={<AboutUs/> }/>
        <Route path='/Sample' element={<Sample/> }/>
        <Route path='/Signup' element={<Signup/> }/>
        <Route path='/Verification' element={<Verification/> }/>
        <Route path='/applicationpage' element={<ApplicationPage/> }/>
        <Route />
      </Routes>
    </Router>
    <div className="App">
    </div>
    </>
  );
}

export default App;
