import React, { Component } from 'react';
import './App.css';

export default class App extends Component {

  componentDidMount() {
    function hasGetUserMedia() {
      return !!(navigator.mediaDevices &&
        navigator.mediaDevices.getUserMedia);
    }

    hasGetUserMedia();

    if (hasGetUserMedia()) {
      // Good to go!
    } else {
      alert('getUserMedia() is not supported by your browser');
    }

    const constraints = {
      video: true
    };

    const video = document.querySelector('video');

    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => {video.srcObject = stream});
  }

  render() {
    return (
      <div>
        <input type="file" accept="video/*;capture=camcorder" />
        <video autoPlay></video>
      </div>
    );
  }
}
