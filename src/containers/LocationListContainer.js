import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LocationList from './../components/LocationList'
import { connect } from 'react-redux';
import { setCity } from './../actions';

class LocationListContainer extends Component {

    handleSelectionLocation = (cityy, data) => {
        console.log(`handleSelectionLocation ${cityy}`);     
        this.props.setCity(cityy);

      };

    render() {
        return (
            <LocationList cities={this.props.cities} onSelectedLocation={this.handleSelectionLocation}></LocationList>
        );
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities:PropTypes.array.isRequired, 
};


/* 
Dispatch es la fuciones que me permite invocar actions   
Podemos hacer uso de el porque le pasamos el Store al Provider
*/
/* Esta funcion devuelve un objeco */

/* el setCity rojo es el que se define en las prop de este componente.
el setCity azul es la action. 
no es necesario que tengan el mismo nombre.
 */
const mapDispatchToPropsActions = dispatch => (
    {
        setCity: value => dispatch(setCity(value)),

    }
);

const LocationListContainerConnected = connect(null, mapDispatchToPropsActions)(LocationListContainer);

export default LocationListContainerConnected;
