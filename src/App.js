import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/Landing_Page/LandingPage';
import SignUp from './Components/Sign_Up/SignUp';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Navbar />
       <Routes>
       <Route path="/" element={<LandingPage/>}/>
       <Route path="/signup" element={<SignUp />}/>
       <Route path="/login" element={<Login />}/>
       <Route path="/instant-consultation" element={<InstantConsultation />} />
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
