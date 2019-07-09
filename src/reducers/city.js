import { SET_CITY } from './../actions'


/* state = {}
si no me llega una estado inicial, con esto me aseguro que lo inicializo.
esto nos lo brinda ecmas.
 */
export const city = (state = {}, action) => {
    switch (action.type) {
        case SET_CITY:
            return action.value;
        default:
            return state;
    }
}