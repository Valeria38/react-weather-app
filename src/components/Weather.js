import React from 'react';

const Weather = (props) => {
  const { 
    temperature, 
    city, 
    country, 
    humidity, 
    description, 
    error 
  } = props.details;

  return (
    <div className="Weather">
      { temperature && !error &&
      <div>
        <p>Location: {city}, {country}</p>
        <p>Temperature: {temperature}</p>
        <p>Humidity: {humidity}</p>
        <p>Conditions: {description}</p>
      </div> }
      { error && error.toUpperCase() }
    </div>
    )

}

export default Weather;