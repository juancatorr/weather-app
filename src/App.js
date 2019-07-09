import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import { AppBar, Typography } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import ForeCasteExtendedContainer from './containers/ForeCasteExtendedContainer';
import LocationListContainer from './containers/LocationListContainer'

/* import logo from './logo.svg';*/
import './App.css';
const cities = [
  "Buenos Aires,ar"
  , "Washington,us"
  , "Caracas,ve"
  , "Toronto,ca"
  , "Quito,ec"];

/* pide que le pasememos como parametros un "Reducer" que es lo que me dice que sucedio no como.*/


class App extends Component {

  render() {

    return (
      <Grid fluid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='title' color='inherit'>WEATHER APP</Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col sm={12} xl={6}>
            <LocationListContainer cities={cities}></LocationListContainer>
          </Col>
          <Col sm={12} xl={6}>
            <Paper elevation={4}>
              <div className="details">
                {/* si tengo un valor en city renderizo el forecastextended sino, no */
                  <h1>
                    <ForeCasteExtendedContainer></ForeCasteExtendedContainer>
                  </h1>
                }
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;