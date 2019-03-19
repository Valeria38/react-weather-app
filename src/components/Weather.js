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
    <>
      { temperature && !error &&
      <>
        <p>Location: {city}, {country}</p>
        <p>Temperature: {temperature}</p>
        <p>Humidity: {humidity}</p>
        <p>Conditions: {description}</p>
      </> }
      { error && error }
    </>
    )

}

export default Weather;