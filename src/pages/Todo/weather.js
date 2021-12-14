import React, { Component, createRef } from 'react';
import './todoStyle.css';

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cites: [
        {id: 1, city: 'Dindigul', temp: '24'},
        {id: 2, city: 'Coimbatore', temp: '20'},
        {id: 3, city: 'Chennai', temp: '30'},
        {id: 4, city: 'Trichy', temp: '24'},
      ],
      cityMatches: '',
    };
    this.inputRef = createRef();
  }

  weatherForecast = (event) => {
    event.preventDefault();
    const currentCity = this.inputRef.current.value;

    this.setState(
      ({ cites }) => {
      const result = cites.find((item) => item.city === currentCity);
      return {
        cityMatches: result ? result : `No matches found`,
      }
    })
  }

  render() {
    const { title, btnText } = this.props;
    const { cityMatches } = this.state

    let tempForecast;

    if (cityMatches.city) {
      tempForecast = (
        <div>
          {cityMatches.city} city's temperature is {cityMatches.temp}
        </div>
      );
    } else {
      tempForecast = cityMatches;
    }

    return (
      <div className="bg-[#FAFAFA] h-screen flex flex-col">
        <h1 className="text-center my-2 text-lg font-bold">{title}</h1>
        <form className="flex justify-center my-2" onSubmit={this.weatherForecast}>
          <input type="text" className="input" ref={this.inputRef} />
          <button type="submit" className="btn-primary">
            {btnText}
          </button>
        </form>
        {tempForecast}
      </div>
    );
  }
}