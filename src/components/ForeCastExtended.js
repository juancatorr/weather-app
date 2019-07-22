import React from 'react';
import PropTypes from 'prop-types';
import ForeCastItem from './ForeCastItem';


const renderDaysForeCastItem = (foreCastData) => {

    return foreCastData.map(foreCast => <ForeCastItem weekDay={foreCast.weekDay} data={foreCast.data} hour={foreCast.hour} key={`${foreCast.weekDay}${foreCast.hour}`}></ForeCastItem>);
}
const renderProgres = () => {
    return <h3>cargando pronóstico extendido...</h3>;
}


const ForeCastExtended = ({city, foreCastData} ) => (
            <div>
                <h2 className='forecast-title'>
                    {`Pronóstico Extendido para ${city}`}
                </h2>
                {foreCastData != null ? renderDaysForeCastItem(foreCastData) : renderProgres()}
            </div>
);

/* Recordar que con esto nos tira warnings en tiempo de ejecución. */
ForeCastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    foreCastData: PropTypes.array,
};

export default ForeCastExtended;

