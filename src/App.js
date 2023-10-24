import React from 'react'
import {Routes, Route ,Navigate} from 'react-router-dom';
import DetailsFillingPage from './Components/DetailsFillComponents/DetailsFillingPage';
import Home from './Components/HomePage/Home'
import NavBar from './Components/Navigation/Navbar'
import MyResume from './Components/ResumeDisplay/MyResume';
import AboutUs from './Components/AboutUs/AboutUs';
import './App.css';
import LoginForm from './LoginForm';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPasword';

// This component defines routing for other components 
// Home page displays the different templates from which user can select either of them.
//'detailsfillingpage' displays the detailsfillingpage inside which there are nested routes to display personalinfo, workexperience, education and keyskills page.
//'myresume' displays the resume created by the user. 
//'about' displays the AboutUs page of the app.
function App() {
  return (
    <div>
       
        
        <div>
            <Routes>
                 
                  <Route path="/" element={<><LoginForm /></>} />
        
                  <Route path="/signup" element={<><SignUp/></>} />
                  <Route path="/reset" element={<><ForgotPassword/></>} />
                  <Route path="/resetpass" element={<><ResetPassword/></>} />
                  <Route path="/detailsfillingpage/*" element ={<><NavBar/><DetailsFillingPage /></>}></Route> 
                  <Route path="/myresume" element={<><NavBar/><MyResume/></>}></Route>
                  <Route exact path="/about" element={<><NavBar/><AboutUs/></>}></Route>
                  <Route path="*" element={<Navigate to="/about" />}></Route>
            </Routes> 
        </div>
    </div>
  )
}


export default App


