
import { SET_FORECAST_DATA } from './../actions'
import { createSelector } from 'reselect';

export const cities = (state = {}, action) => {
    switch (action.type) {
        case SET_FORECAST_DATA:
            return {
                ...state,
                [action.city]: { foreCastData: action.forecastData, weather: null }
                /*lo que estoy haciendo es generar una variable dentro del estado de tipo diccionario
                donde la city es la key y esta tiene 2 valores, foreCastData y weather */
            }
        default:
            return state;
    }
}

/* esto es un selector */
export const getForeCastDataFromCities = createSelector((cities, city) => cities[city] && cities[city].foreCastData, forecastData => forecastData)  
