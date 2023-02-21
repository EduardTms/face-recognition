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
import Register from "./components/Register/Register";

// const app = new Clarifai.App({
//   apiKey: "6b2b48851e9544b7ac26df4c3e1fef24",
// });

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageURL: "",
      box: {},
      route: "signin",
      isSignedIn: false,
      user: {
        id: "",
        name: "",
        email: "",
        entries: 0,
        joined: "",
      },
    };
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.username,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      },
    });
  };

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

  // onButtonSubmit = () => {
  //   this.setState({ imageURL: this.state.input });
  //   app.models
  //     .predict(
  //       {
  //         id: "face-detection",
  //         name: "face-detection",
  //         version: "6dc7e46bc9124c5c8824be4822abe105",
  //         type: "visual-detector",
  //       },
  //       this.state.input,
  //     )
  //     .then((response) => {
  //       console.log("hi", response);
  //       if (response) {
  //         fetch("http://localhost:3000/image", {
  //           method: "put",
  //           headers: { "Content-Type": "application/json" },
  //           body: JSON.stringify({
  //             id: this.state.user.id,
  //           }),
  //         })
  //           .then((response) => response.json())
  //           .then((count) => {
  //             this.setState(Object.assign(this.state.user, { entries: count }));
  //           });
  //       }
  //       this.displayFaceBox(this.calculateFaceLocation(response));
  //     })
  //     .catch((err) => console.log(err));
  // };

  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState({ isSignedIn: false });
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    // destructuring
    const { isSignedIn, imageURL, route, box } = this.state;
    return (
      <div className="App">
        <Navigation
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
        />
        {route === "home" ? (
          <div>
            <Logo />
            <Rank
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            {/* <Api box={box} imageURL={imageURL} /> */}
            <ParticlesBg type="cobweb" bg={true} />
          </div>
        ) : route === "signin" ? (
          <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        ) : (
          <Register
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        )}
      </div>
    );
  }
}

export default App;
