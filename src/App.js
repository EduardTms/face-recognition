import React, { Component } from 'react';
import './App.css';
// Libraries
import ParticlesBg from 'particles-bg';
import Clarifai, { COLOR_MODEL } from 'clarifai';
// components
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/LinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Api from './components/FaceDetectionAPI/Api';

// const app = new Clarifai.App({
//   apiKey: '2ee21aaf86de4a07ba1402e145d6af85'
//  });

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
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80.jpg")
      .then(
        function(response) {
          console.log(response);
        },
        function(err) {
          // there was an error
        }
      );
  }

  render() {
    return (
    <div className="App">
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
      <Api />
      <ParticlesBg type="cobweb" bg={true} />
    </div>
    )
  }
}

export default App;
