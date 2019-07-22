import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';
import './styles.css';



const LocationList = ({ cities, onSelectedLocation }) => {

    const handleWeatherLocationClick = (cityy) => {
        console.log("handleWeatherLocationClick");
        onSelectedLocation(cityy);
    };

    const strToComponents = (cities) => {
        return cities.map(city =>
            <WeatherLocation
                key={city.key}
                city={city.name}
                onWeatherLocationClick={() => (handleWeatherLocationClick(city.name))}
                data = {city.data}>
            </WeatherLocation>)
    };
    return <div className="locationList">
        {strToComponents(cities)}
    </div>
};


LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
};

export default LocationList;
