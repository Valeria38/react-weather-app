import React from 'react';

const Form = (props) => {
  const { getWeather } = props;

  return (
    <div className="Form">
      <form onSubmit={getWeather}>
        <div>
          <input type="text" name="city" placeholder="City" />
          <input type="text" name="country" placeholder="Country / country abbr" />
        </div>
        <button>Get weather!</button>
      </form>
    </div>
  )
}

export default Form;