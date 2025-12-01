import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import { AuthContext } from '../src/context/AuthContext.js';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Logout from './components/auth/Logout.jsx';

function App() {
  const [authState, setAuthState] = useState({
    email: '',
    steamTradeLink: '',
    isAuthenticated: false,
  });

  useEffect(() => {
  const savedUser = JSON.parse(localStorage.getItem('user'));
  if (savedUser) {
    setAuthState({
      ...savedUser,
      isAuthenticated: true, 
    });
  }
}, []);

  const changeAuthState = (state) => {
    setAuthState(state);

    if (state.isAuthenticated) {
      localStorage.setItem('user', JSON.stringify(state));
    } else {
      localStorage.removeItem('user');
    }
  };

  const contextData = {
    email: authState.email,
    steamTradeLink: authState.steamTradeLink,
    isAuthenticated: authState.isAuthenticated,
    changeAuthState,
  };

  return (
    <AuthContext.Provider value={contextData}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {!contextData.isAuthenticated ? (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        ) : (
          <>
            <Route path="/logout" element={<Logout />} />
          </>
        )}
      </Routes>
      <Footer />
    </AuthContext.Provider>
  );
}

export default App;
