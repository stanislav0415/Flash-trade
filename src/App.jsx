import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AuthContext } from './context/AuthContext';
import ProtectedRoute from './components/common/ProtectedRoute';
import NotFound from './components/common/NotFound';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Logout from './components/auth/Logout';
import Skins from './components/skins/all-skins/Skins';
import ModalSkin from './components/details/ModalSkin';
import SellSkin from './components/sell/Sell';
import EditSkin from './components/edit/Edit';
import BuySkin from './components/buy/BuySkin';
import About from './components/about/About';
import PaymentComplete from './components/payment/Payment';

function App() {
  const [authState, setAuthState] = useState({
    email: '',
    steamTradeLink: '',
    isAuthenticated: false,
  });

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser) {
      setAuthState({ ...savedUser, isAuthenticated: true });
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
        <Route path="/skins" element={<Skins />} />
        <Route path="/skins/:skinId" element={<ModalSkin />} />
        <Route path="/about" element={<About />} />
        {!contextData.isAuthenticated && (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        )}

      
        <Route
          path="/sell"
          element={
            <ProtectedRoute>
              <SellSkin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/:skinId/buy"
          element={
            <ProtectedRoute>
              <BuySkin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/skins/:skinId/edit"
          element={
            <ProtectedRoute>
              <EditSkin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/payment-complete"
          element={
            <ProtectedRoute>
              <PaymentComplete />
            </ProtectedRoute>
          }
        />
        <Route
          path="/logout"
          element={
            <ProtectedRoute>
              <Logout />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </AuthContext.Provider>
  );
}

export default App;
