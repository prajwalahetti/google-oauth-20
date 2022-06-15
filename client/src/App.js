import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';
import Dashboard from './components/dashboard/Dashboard';

import './App.css';
const App = () => {
  return (

      <BrowserRouter>
    <div className='App'>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth/google" element={<Login />} />
      <Route path="/auth/logout" element={<Logout />} />
      <Route path='/dashboard' element={<Dashboard/>}/>
      
      </Routes>

    </div>
    </BrowserRouter>

  )
}

export default App