import { useState } from 'react'
import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home';
import Login from './components/auth/login';
import Register from './components/auth/register';
import Placement from './components/pages/Placement';
import Faq from './components/pages/Faq';
import Aboutus from './components/pages/Aboutus';
import Course from './components/courses/Course';
import Contact from './components/pages/Contact';
import News from './components/pages/News';
import People from './components/people/People';
function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route  path="/register" element={<Register/>}/>
        <Route  path="/placement" element={<Placement/>}/>
        <Route  path="/faq" element={<Faq/>}/>
        <Route  path="/aboutus" element={<Aboutus/>}/>
        <Route  path="/courses" element={<Course/>}/>
        <Route  path="/connect" element={<Contact/>}/>
        <Route  path="/news" element={<News/>}/>
        <Route  path="/people" element={<People />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
