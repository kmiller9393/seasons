import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      location: {
        latitude: null,
        longitude: null
      }
    };
  }

  render() {
    window.navigator.geolocation.getCurrentPosition(
      position =>
        this.setState({
          location: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }
        }),
      error => console.log(error)
    );

    return (
      <div>
        <p>latitude: {this.state.location.latitude}</p>
        <p>longitude: {this.state.location.longitude}</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
