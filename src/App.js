import React, { Component } from "react";
import "./App.css";
// Libraries
import ParticlesBg from "particles-bg";
import Clarifai from "clarifai";
// components
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/LinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import Api from "./components/FaceDetectionAPI/Api";
import SignIn from "./components/SignIn/SignIn";

const app = new Clarifai.App({
  apiKey: "2ee21aaf86de4a07ba1402e145d6af85",
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageURL: "",
      box: {},
      route: "signin",
    };
  }

  calculateFaceLocation = (data) => {
    const face = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      // the percentage of the width (face.left_col) * width to find out where the column should be
      leftCol: face.left_col * width,
      // same as left col
      topRow: face.top_row * height,
      // finding the parallel point of the leftCol, that is on the opposite side of the face
      // it's the same concept as before, just subtracting the width of the right column from the total width
      rightCol: width - face.right_col * width,
      bottomRow: height - face.bottom_row * height,
    };
  };

  displayBoundingBox = (box) => {
    this.setState({ box: box });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageURL: this.state.input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) =>
        this.displayBoundingBox(this.calculateFaceLocation(response)),
      )
      .catch((err) => console.log(err));
  };

  onRouteChange = (route) => {
    this.setState({ route: route });
  };

  render() {
    return (
      <div className="App">
        <Navigation onRouteChange={this.onRouteChange} />
        {this.state.route === "signin" ? (
          <SignIn onRouteChange={this.onRouteChange} />
        ) : (
          <div>
            <Logo />
            <Rank />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <Api box={this.state.box} imageURL={this.state.imageURL} />
            <ParticlesBg type="cobweb" bg={true} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
