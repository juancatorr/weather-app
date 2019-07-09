import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../../components/WeatherLocation/WeatherData';


const ForeCastItem = ({ weekDay, data, hour }) => (
    <div>
        <div> {`${weekDay} - ${hour} hr`}</div>
        <WeatherData data={data}></WeatherData> 
    </div>

);

ForeCastItem.prototype = {
    weekDay: PropTypes.string.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.number.isRequired,
        humidity: PropTypes.string.isRequired,
        wind: PropTypes.number.isRequired,
    }),
    hour:PropTypes.string.isRequired,
}

export default ForeCastItem;
