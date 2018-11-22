import React from 'react';
import WeatherIcons from 'react-weathericons';
import {
  CLOUD  
  ,SUN 
  ,RAIN  
  ,SNOW  
  ,THUNDER
  ,DRIZZLE
} from '../../../constants/wheaters';
import PropTypes from 'prop-types';
import './styles.css';

//LA KEY DEL DICCIONARIO SERA EL VALOR DE LAS CONSTANTES.
const incons = {
  [CLOUD]: "cloud",

  [SUN]: "day-sunny",
  [RAIN]: "rain",
  [SNOW]: "snow",
  [THUNDER]: "day-thunderstorm",
  [DRIZZLE]: "day-showers",
};

const GetWeatherIcon = (weatherState) => {

  const sizeIcon = "4x";
  const icon = incons[weatherState];
  if (icon) {
    return <WeatherIcons className="wicon" name={icon} size={sizeIcon}></WeatherIcons>;
  } else {
    return <WeatherIcons className="wicon" name={"rain"} size={sizeIcon}></WeatherIcons>;
  }

}

const WeatherTemperature = ({ temperature, weatherState }) => (

  <div className="weatherTemperatureCont">

    <span className="temperature">

      {GetWeatherIcon(weatherState)}

      {` ${temperature}`}
    </span>
    <span className="temperatureType">{`ºC`}</span>
  </div>
);

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired,
}
export default WeatherTemperature;