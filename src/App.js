import React from 'react';
import './App.css';
// Libraries
import ParticlesBg from 'particles-bg';
// components
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/LinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition /> */}
      <ParticlesBg type="cobweb" bg={true} />
    </div>
  );
}

export default App;
