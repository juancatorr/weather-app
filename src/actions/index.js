export const SET_CITY = 'SETCITY';

/*
Las acciones son un bloque de información que envia datos desde tu aplicación a tu store. 
Son la única fuente de información para el store. 
Las envias al store usando store.dispatch().
*/

/* por las propiedades de emacs la definicion de la accion siguente pude quedar :
export const setCity = (value) => ({ type: SET_CITY , value: value}); */

export const setCity = value => ({ type: SET_CITY , value});


/* a esta forma de generar las acciones se le llama actioncreator */
