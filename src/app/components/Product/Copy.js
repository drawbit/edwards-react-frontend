import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Copy = ({ text }) => (
  <Row>
    <Col md={ 10 }
         mdOffset={ 1 }>
      <div className="product__text"
           dangerouslySetInnerHTML={ { __html: text } } />
    </Col>
  </Row>
);

export default Copy;
