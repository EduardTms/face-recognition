import React, { Component } from 'react';
import './App.css';
// Libraries
import ParticlesBg from 'particles-bg';
import Clarifai from 'clarifai';
// components
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/LinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Api from './components/FaceDetectionAPI/Api';

const app = new Clarifai.App({
  apiKey: '2ee21aaf86de4a07ba1402e145d6af85'
 });

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageURL: '',
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageURL: this.state.input})
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then(
        function(response) {
          console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
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
      <Api imageURL={this.state.imageURL}/>
      <ParticlesBg type="cobweb" bg={true} />
    </div>
    )
  }
}

export default App;
