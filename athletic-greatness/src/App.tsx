import React from 'react';
import './variables.scss';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';


function App() {

  return (
    <div className="app bg-black">
      <Navbar />
      <Hero/>
      <About/>
    </div>
  )
}

export default App

