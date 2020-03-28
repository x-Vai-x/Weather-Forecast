import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
    <div className="App">
      <h1>Welcome to my weather application.</h1>
    
     
      <Link to={'./weather/current'}>
        <button variant="raised">
            View current weather.
        </button>
      </Link>
      <Link to={'./weather/forecast'}>
        <button variant="raised">
            View weather forecast.
        </button>
      </Link>
    </div>
    );
  }
}
export default Home;