import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div className="min-h-screen bg-gray-100 font-sans">
          <nav className="bg-blue-600 p-4 text-white">
            <div className="container mx-auto flex justify-between">
              <h1 className="text-lg font-bold">Magic.Ai</h1>
              <div>
                <Link to="/login" className="mr-4">Login</Link>
                <Link to="/signup">Signup</Link>
              </div>
            </div>
          </nav>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;
