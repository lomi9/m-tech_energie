import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Plomberie from './pages/plomberie/Plomberie';
import Chauffage from './pages/chauffage/Chauffage';
import Metallerie from './pages/metallerie/Metallerie';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/plomberie" element={<Plomberie />} />
        <Route path="/chauffage" element={<Chauffage />} />
        <Route path="/metallerie" element={<Metallerie />} />
      </Routes>
    </Router>
  );
}

export default App;
