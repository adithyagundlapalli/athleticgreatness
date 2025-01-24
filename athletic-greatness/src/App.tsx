import React from 'react';
import './variables.scss';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Services from './components/services';
import Pricing from './components/pricing';
import Contact from './components/contact';

function App() {

  return (
    <div className="app">
      <Navbar />
      <Hero/>
      <About/>
      <Services/>
      <Pricing/>
      <Contact/>
    </div>
  )
}

export default App

