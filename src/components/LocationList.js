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
        return cities.map(cityy =>
            <WeatherLocation
                key={cityy}
                city={cityy}
                onWeatherLocationClick={
                    () => (
                        handleWeatherLocationClick(cityy)
                    )
                }>
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
