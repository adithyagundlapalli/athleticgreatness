import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import './variables.scss';

function App() {

  return (
    <div className="app bg-background">
      <Navbar />
      <Hero/>
    </div>
  )
}

export default App

