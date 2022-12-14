import React, { Component } from 'react';
import './App.css';
// Libraries
import ParticlesBg from 'particles-bg';
// components
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/LinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log("click");
  }

  render() {
    return (
    <div className="App">
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
      {/* <FaceRecognition /> */}
      <ParticlesBg type="cobweb" bg={true} />
    </div>
    )
  }
}

export default App;
