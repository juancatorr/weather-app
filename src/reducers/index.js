import { combineReducers } from 'redux';
import { city } from './city';
import { cities, getForeCastDataFromCities as _getForeCastDataFromCities } from './cities';
import { createSelector } from 'reselect';

export default combineReducers({
    cities: cities,
    city,
});

/*
En un primer momento se definieron los selectores getCity y getForeCastDataFromCities como están a continuación comentados.
Luego con la incorporación la libreria reselect se paso a utilzar esta librería para crear los selectores por se va a continuación.
Se puede ver que como primieros parametros se envía los elementos de state que queremos utilzar y como ultimo paramentros el resultado
que queremos con esos estodos.
Con la incorporacion de esta libreria tenemos como beneficio que en caso de tener los mismos parametros de entrada , es decir no 
cambia con respecto a los valores anteriores no se ejucuta el utlimo parametros del selector, en este caso sería _getForeCastDataFromCities.
Esto es posible gracias al uso de una cache llamada MEMOIZATION En este ejemplo _getForeCastDataFromCities puede ser una funcion con mucho 
proceso y nos estaríamos ahorrado dicho cálculo.

NOTAR QUE EN getForeCastDataFromCities EL SEGUNDO PARAMETRO ES EL selector definido anteriormente.

export const getCity = state => state.city;
export const getForeCastDataFromCities = state => _getForeCastDataFromCities(state.cities, getCity(state)); */


export const getCity = createSelector(state => state.city, city => city);

export const getForeCastDataFromCities = createSelector(state => state.cities, getCity, (cities, city) => _getForeCastDataFromCities(cities, city));
/* esto se puede reducir a :
export const getForeCastDataFromCities = createSelector(state => state.cities, getCity, _getForeCastDataFromCities); */