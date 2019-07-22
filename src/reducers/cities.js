
import { SET_FORECAST_DATA, GET_WEATHER_CITY, SET_WEATHER_CITY } from './../actions';
import { createSelector } from 'reselect';
import toPairs from 'lodash.topairs';

export const cities = (state = {}, action) => {
    switch (action.type) {
        case SET_FORECAST_DATA: {
            const { city, foreCastData } = action;
            return {
                ...state,
                [city]: { ...state[city], foreCastData, foreCastDataDate: new Date() }
                /*lo que estoy haciendo es generar una variable dentro del estado de tipo diccionario
                donde la city es la key y esta tiene 2 valores, foreCastData y weather */
            };
        };
        case GET_WEATHER_CITY: {

            const city = action.payload;
            return {
                ...state,
                [city]: { ...state[city], weather: null },
            }
        };
        case SET_WEATHER_CITY: {
            const { city, weather } = action.payload;
            return {
                ...state,
                [city]: { ...state[city], weather },
            }
        };
        default:
            return state;
    }
}

/* esto es un selector */
export const getForeCastDataFromCities =
    createSelector(
        (cities, city) => cities[city] && cities[city].foreCastData
        , forecastData => forecastData
    )

const fromObjectToArray = cities => (toPairs(cities).map(([key, value]) => ({ key: key, name: key, data: value.weather })));
export const getWeatherCites =
    createSelector((state) => fromObjectToArray(state), cities => cities)  
