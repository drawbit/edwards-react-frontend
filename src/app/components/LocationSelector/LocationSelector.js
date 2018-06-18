import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Dropdown from './Dropdown';
import map from './assets/Graphic_location-map@2x.png';
import './style.css';

const LocationSelector = (props) => (
  <Row>
    <Col xs={ 10 }
         xsOffset={ 1 }>
      <Dropdown { ...props } />
    </Col>
    <Col xs={ 8 }
         xsOffset={ 2 }>
      <img className="locationselector__image" src={ map } alt="World Map" />
    </Col>
  </Row>
);

export default LocationSelector;
