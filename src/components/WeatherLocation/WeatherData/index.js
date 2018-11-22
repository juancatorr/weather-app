import React from 'react';
import ExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperatura';


import './styles.css';
import PropTypes from 'prop-types';

const WeatherData = ({ data: { temperature, weatherState, humidity, wind } }) => (

    <div className="weatherDataCont">
        <WeatherTemperature temperature={temperature} weatherState={weatherState} ></WeatherTemperature>
        <ExtraInfo humidity={humidity} wind={wind}></ExtraInfo>
    </div>
);

WeatherData.prototype = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.number.isRequired,
        humidity: PropTypes.string.isRequired,
        wind: PropTypes.number.isRequired,
    }),
};

//va el dafult porque es un unico archivo
export default WeatherData;