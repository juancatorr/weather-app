import React from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css';
import CircularProgress from '@material-ui/core/CircularProgress';

const WeatherLocation = ({ city, data, onWeatherLocationClick }) => {
    return (
        <div className='weatherLocationCont' onClick={onWeatherLocationClick}>
            <Location city={city} time={"ayer"}></Location>
            {data ?
                <WeatherData data={data}></WeatherData>
                :
                <CircularProgress size={45}></CircularProgress>
            }
        </div>
    )
};


WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;