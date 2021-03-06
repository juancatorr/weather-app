import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForeCastExtended from './../components/ForeCastExtended';
import { connect } from 'react-redux';
import { getForeCastDataFromCities, getCity } from './../reducers/index';

class ForeCasteExtendedContainer extends Component {
    render() {
        return (
            this.props.city &&
            <ForeCastExtended city={this.props.city} foreCastData={this.props.foreCastData} ></ForeCastExtended>

        );
    }
}

ForeCasteExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
    foreCastData: PropTypes.array,
};
 
const mapStatetoProps = (state) => ({
    city: getCity(state),
    foreCastData: getForeCastDataFromCities(state),
});

const ForeCasteExtendedContainerConnected = connect(mapStatetoProps, null)(ForeCasteExtendedContainer);

export default ForeCasteExtendedContainerConnected;