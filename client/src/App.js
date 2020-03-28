import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './App/pages/Home';
import CurrentWeather from './App/pages/CurrentWeather';
import WeatherForecast from './App/pages/WeatherForecast';
class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/weather/current' component={CurrentWeather}/>
          <Route path='/weather/forecast' component={WeatherForecast}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;
