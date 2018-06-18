import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Buttons from './Buttons';
import Copy from './Copy';
import './style.css';

const Product = ({ copy, slug }) => (
  <div className="product">
    <Row>
      <Col md={ 12 }>
        <Buttons baseUrl={ `/service/${ slug }` } />
      </Col>
    </Row>
    <Copy text={ copy } />
  </div>
);

export default Product;
