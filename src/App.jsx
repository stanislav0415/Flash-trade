import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchUser } from './api/auth-api.js';
import './App.css';
import { AuthContext } from '../src/context/AuthContext.js';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';


function App() {
    const [authState, setAuthState] = useState({
    email: '',
    isAuthenticated: false,
    isAdmin: false,
  });
    const changeAuthState = (state) => {
    setAuthState(state);
  };
  useEffect(() => {
    fetchUser(changeAuthState);
  }, []);

  const contextData = {
    email: authState.email,
    isAuthenticated: authState.isAuthenticated,
    changeAuthState,
    fetchUser
  };

  return (
     <AuthContext.Provider value={contextData}>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          {!contextData.isAuthenticated ? (
          <>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </>
        ) : (
          <>
            
          </>
        )}
        </Routes>
      <Footer />
     </AuthContext.Provider>

  
  );
}

export default App;

