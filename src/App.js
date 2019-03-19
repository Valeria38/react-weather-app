import React, { Component } from 'react';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = 'a0566e095cd90afd26c1dc52103ca1d0';

class App extends Component {
  state = {
    temperature: null,
    city: null,
    country: null,
    humidity: null,
    description: null,
    error: null
  };

  getWeather = async (event) => {
    event.preventDefault();

    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;

    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
    .then(data => data.json());

    if ( city && country  ) {
      this.setState({
        temperature: apiCall.main.temp,
        city: apiCall.name,
        country: apiCall.sys.country,
        humidity: apiCall.main.humidity,
        description: apiCall.weather[0].description,
        error: ''
      });
    } else {
      this.setState({
        error: apiCall.message
      });
    }
}


  render() {
    return (
      <div className="App">
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather details={this.state} />
      </div>
    );
  }
}

export default App;
