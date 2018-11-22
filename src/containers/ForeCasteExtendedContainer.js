import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForeCastExtended from './../components/ForeCastExtended';
 import {connect} from 'react-redux';


class ForeCasteExtendedContainer extends Component {
    render() {
        return (
            this.props.city &&
            <ForeCastExtended city={this.props.city}></ForeCastExtended> 
        );
    }
}

ForeCasteExtendedContainer.propTypes = {
city:PropTypes.string.isRequired,
};

const mapStatetoProps = state => ({
    
    city:state.city
});

const ForeCasteExtendedContainerConnected = connect(mapStatetoProps,  null)(ForeCasteExtendedContainer);

export default ForeCasteExtendedContainerConnected;