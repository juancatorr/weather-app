import { getUrlForeCastByCity } from './../services/getUrlWatherByCity';
import trasformForecast from './../services/trasformForecast';

export const SET_CITY = 'SETCITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
 
/*
Las acciones son un bloque de información que envia datos desde tu aplicación a tu store. 
Son la única fuente de información para el store. 
Las envias al store usando store.dispatch().
*/

/* por las propiedades de emacs la definicion de la accion siguente pude quedar :
export const setCity = (value) => ({ type: SET_CITY , value: value}); */


const setCity =  value => ({ type: SET_CITY, value });
const setForeCastData = (city, forecastData) => ({ type: SET_FORECAST_DATA, city, forecastData });

export const setSelectedCity = (city) => {

    return dispatch => {

        dispatch(setCity(city));

        return fetch(getUrlForeCastByCity(city)).then(result => {

            return result.json();

        }).then(data => {

            const forecastData = trasformForecast(data);
            console.log(forecastData);

            dispatch(setForeCastData( city, forecastData ));

        });
    }
};
/* a esta forma de generar las acciones se le llama actioncreator */
