/* Este es un componente NO FUNCIONAL es decir va a ser una CLASE.
Por eso me import Component */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForeCastItem from './ForeCastItem';
/* import './styles.css'; */


/* const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
const data = {
    temperature:1,
    humidity:10,
    weatherState:'nommal',
     wind:'normal ' 
}; */

class ForeCastExtended extends Component {



    RenderDaysForeCastItem(foreCastData) {

        return foreCastData.map(foreCast => <ForeCastItem weekDay={foreCast.weekDay} data={foreCast.data} hour={foreCast.hour} key={`${foreCast.weekDay}${foreCast.hour}`}></ForeCastItem>);
    }
    RenderProgres() {
        return <h3>cargando pronóstico extendido...</h3>;
    }
    render() {

        const { city } = this.props;
        const { foreCastData } = this.props;
        return (
            <div>
                <h2 className='forecast-title'>
                    {`Pronóstico Extendido para ${city}`}
                </h2>

                {foreCastData != null ? this.RenderDaysForeCastItem(foreCastData) : this.RenderProgres()}

            </div>);
    };
};

/* Recordar que con esto nos tira warnings en tiempo de ejecución. */
ForeCastExtended.propTypes = {
    city: PropTypes.string.isRequired,
};

export default ForeCastExtended;

