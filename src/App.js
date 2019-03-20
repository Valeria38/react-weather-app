import React, { Component } from 'react';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import COUNTRY_CODES from './country_codes';


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

  searchCountryCode = (countryName) => {
    if (countryName.length === 2) {
      return countryName;
    }

    if (!countryName) {
      return 1;
    }

    const result = Object.values(COUNTRY_CODES).filter(country => {
      return country.toLowerCase() === countryName.toLowerCase();
    });

    const code = Object.entries(COUNTRY_CODES).filter(array => array[1] === result[0])[0][0];
    return code;
  }

  getWeather = async (event) => {
    event.preventDefault();

    const city = event.target.elements.city;
    const cityValue = city.value;
    const country = event.target.elements.country;
    const countryValue = country.value;

    city.value = "";
    country.value = "";
    
    const countryCode = this.searchCountryCode(countryValue);

    const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryCode}&appid=${API_KEY}&units=metric`)
    .then(data => data.json());

    if ( city && country && apiCall.name ) {
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
