import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import { Socials, Navbar, Footer, Errorpage } from './components/components.exports';
import './App.css';
import Portfolio from './pages/portfolio/Portfolio';

const App = () => {
  return (
    <Router>
      <Socials />
      <Navbar />
      <Routes>
        <Route path='*' element={<Errorpage />} />
        <Route path='/' element={<Homepage />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
      <div className="divider container__large">
        <span className="tag">
          <p>Contact</p>
        </span>
      </div>
      <Footer/>
    </Router>
  )
}

export default App