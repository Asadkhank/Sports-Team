import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutTheClub from './Pages/AboutTheClub.jsx';

import News from './Pages/News.jsx';
import Contact from './Pages/Contact.jsx';
import Footer from './Components/Footer.jsx';
import TheTeam from './Pages/TheTeam.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutTheClub" element={<AboutTheClub />} />
       
        <Route path="/news" element={<News />} />
        <Route path="/contacts" element={< Contact />} />
        <Route path="/TheTeam" element={< TheTeam />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
