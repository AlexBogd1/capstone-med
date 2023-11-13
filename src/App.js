import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/Landing_Page/LandingPage';
import SignUp from './Components/Sign_Up/SignUp';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import BookingConsultation from './Components/BookingConsultation';

import logo from './logo.svg';
import './App.css';
import Notification from './Components/Notification/Notification';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Notification>
       <Routes>
       <Route path="/" element={<LandingPage/>}/>
       <Route path="/signup" element={<SignUp />}/>
       <Route path="/login" element={<Login />}/>
       <Route path="/instant-consultation" element={<BookingConsultation />} />
       </Routes>
     </Notification>
       
     </BrowserRouter>
    </div>
  );
}

export default App;
