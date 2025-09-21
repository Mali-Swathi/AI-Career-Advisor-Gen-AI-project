import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import WelcomePage from './components/WelcomePage.jsx';
import LoginForm from './components/auth/LoginForm.jsx';
import RegisterForm from './components/auth/RegisterForm.jsx';
import CareerAdvisorPage from './components/CareerAdvisorPage.jsx';
import CareerPathDirections from './components/CareerPathDirections.jsx';
import AboutUs from './components/AboutUs.jsx';
import ContactUs from './components/ContactUs.jsx';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/career-advisor" element={<CareerAdvisorPage />} />
        <Route path="/career-directions/:careerTitle" element={<CareerPathDirections />} />
      </Routes>
    </div>
  );
}

export default App;