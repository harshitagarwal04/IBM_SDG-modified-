import React from 'react';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section0 from './components/Section0';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Footer from './components/Footer';

import './App.css'; 

function App() {
  return (
    <div className="App">
      <Section1 />
      <Section0 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
}

export default App;
