import React from 'react';
import './App.css';
// Libraries
import ParticlesBg from 'particles-bg';
// components
import Navigation from './components/Navigation/Navigation';
import Logo from './Logo/Logo';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      {/* <ImageLinkForm /> */}
      {/* <FaceRecognition /> */}
      <ParticlesBg type="cobweb" bg={true} />
    </div>
  );
}

export default App;
