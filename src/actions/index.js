import { getUrlForeCastByCity, getUrlWeatherByCity } from './../services/getUrlWatherByCity';
import trasformForecast from './../services/trasformForecast';
import trasformWather from './../services/trasformWeather';

export const SET_CITY = 'SETCITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';
/*
Las acciones son un bloque de información que envia datos desde tu aplicación a tu store. 
Son la única fuente de información para el store. 
Las envias al store usando store.dispatch().
*/

/* por las propiedades de emacs la definicion de la accion siguente pude quedar :
export const setCity = (value) => ({ type: SET_CITY , value: value}); */


const setCity = value => ({ type: SET_CITY, value });
const setForeCastData = (city, foreCastData) => ({ type: SET_FORECAST_DATA, city, foreCastData });
const getWeatherCity = payload => ({ type: GET_WEATHER_CITY, payload });
const setWeatherCity = payload => ({ type: SET_WEATHER_CITY, payload });

export const setSelectedCity = (city) => {

    return (dispatch, getState) => {

        dispatch(setCity(city));

        const state = getState();
        const date = state.cities[city] && state.cities[city].foreCastDataDate;
        const now = new Date();

        if (date && (now - date) < 1 * 60 * 1000) {
            return;
        }
        return fetch(getUrlForeCastByCity(city)).then(result => {
            //me retoran los datos en crudo, esto le tomo el json y se los paso a then
            return result.json();

        }).then(data => {

            const foreCastData = trasformForecast(data);
            dispatch(setForeCastData(city, foreCastData));
        });
    }
};

export const setWeather = (cities) => {

    return dispatch => {

        cities.forEach(city => {

            dispatch(getWeatherCity(city));

            fetch(getUrlWeatherByCity(city)).then(result => {

                return result.json();
            }).then(data => {
                const weather = trasformWather(data);
                dispatch(setWeatherCity({ city, weather }));
            });
        });
    };
}
