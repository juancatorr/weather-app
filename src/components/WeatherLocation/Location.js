import React from 'react';
/* import PropTypes from 'prop-types'; */
import './style.css';

const Location = ({ city }) => {


    //const {city} = props;
    //console.log(props);

    return (
        <div className='locationCont'>
            <h1>{city}</h1>

        </div>);
};

/* Location.PropTypes = {
    city: PropTypes.string.isRequired, 

}; */
export default Location;