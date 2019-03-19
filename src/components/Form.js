import React from 'react';

class Form extends React.Component {
  render() {

    const { getWeather } = this.props;

    return (
      <>
        <form onSubmit={getWeather}>
          <input type="text" name="city" placeholder="City" />
          <input type="text" name="country" placeholder="Country" />
          <button>Get weather!</button>
        </form>
      </>
    )
  }
}

export default Form;