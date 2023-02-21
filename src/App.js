import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from "./components/Navbar";
import HomeComponent from "./components/Home"
import LoginComponent from "./components/Login"
import RegisterComponent from "./components/Register"

const App = () => {
  return (
    <Router>
      <NavbarComponent/>
      <Routes>
        <Route path='/' exact element ={<HomeComponent/>} />
        <Route path='/login' element ={<LoginComponent/>} />
        <Route path='/register' element ={<RegisterComponent/>} />
      </Routes>
    </Router>
  );
}

export default App;
