import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends Component {
  constructor() {
    super();
    this.state = {
      latitude: null,
      errorMessage: '',
      loading: true
    };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          loading: false
        });
      },
      error => {
        this.setState({
          errorMessage: error.message,
          loading: false
        });
      }
    );
  }

  render() {
    const { loading, latitude, errorMessage } = this.state;

    return (
      <div>
        {loading && <p>Loading...</p>}
        {latitude && <SeasonDisplay latitude={latitude} />}
        {errorMessage && <p>Error: {errorMessage}</p>}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
