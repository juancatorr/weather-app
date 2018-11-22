import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css';
import trasformWather from '../../services/trasformWeather';
import CircularProgress from '@material-ui/core/CircularProgress';
import {getUrlWahterByCity} from './../../services/getUrlWatherByCity';


//esto es una row function
class WeatherLocation extends Component {

    constructor(props) {
        super(props);
        const {city} = props;
        
        this.state = {
            city,
            data: null,
        };
    }

    handleUpdateClick = () => {

        fetch(getUrlWahterByCity(this.state.city)).then(result => {
            return result.json();
        }).then(data => {
            const newWather = trasformWather(data);
            console.log(newWather);

            this.setState(
                {
                    data: newWather
                });
        });
    }
    render() {
        const { city, data } = this.state;
        const {onWeatherLocationClick} = this.props;
        return (
            <div className='weatherLocationCont' onClick={onWeatherLocationClick}>
                <Location city={city} time={"ayer"}></Location>
                {data ? <WeatherData data={data}></WeatherData> :  <CircularProgress size={45}></CircularProgress>}
            </div>
        );
    }

    componentDidMount() {
        this.handleUpdateClick();
    }

    componentWillMount() {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }
}
WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick :PropTypes.func,
}

export default WeatherLocation;