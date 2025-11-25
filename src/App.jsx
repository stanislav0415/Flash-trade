import { Routes, Route } from 'react-router-dom';

import './App.css'
import Header from './componets/header/Header';
import Home from './componets/home/Home'
import Footer from './componets/footer/Footer';
function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
