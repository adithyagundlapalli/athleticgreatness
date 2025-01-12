import React from 'react';
import './variables.scss';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Services from './components/services';
import Pricing from './components/pricing';

function App() {

  return (
    <div className="app">
      <Navbar />
      <Hero/>
      <About/>
      <Services/>
      <Pricing/>
    </div>
  )
}

export default App

