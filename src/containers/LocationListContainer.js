import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LocationList from './../components/LocationList'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './../actions';
import { getWeatherCities, getCity } from './../reducers';

class LocationListContainer extends Component {

    componentDidMount() {
        this.props.setWeather(this.props.cities);
        this.props.setSelectedCity(this.props.city);
    };

    handleSelectionLocation = (city, data) => {
        this.props.setSelectedCity(city);
    };

    render() {
        return (
            <LocationList cities={this.props.citiesWeather} onSelectedLocation={this.handleSelectionLocation}></LocationList>
        );
    }
}

LocationListContainer.propTypes = {
    setSelectedCity: PropTypes.func.isRequired,
    setWeather:PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
    city: PropTypes.string.isRequired,
};

/* 
Dispatch es la fuciones que me permite invocar actions   
Podemos hacer uso de el porque le pasamos el Store al Provider
*/

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

const mapStateToProps = state => ({ city: getCity(state), citiesWeather: getWeatherCities(state) });

const LocationListContainerConnected = connect(
    mapStateToProps
    , mapDispatchToProps)
    (LocationListContainer);

export default LocationListContainerConnected;
