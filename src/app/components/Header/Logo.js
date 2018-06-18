import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import logo from './Logo.png';

const Logo = () => (
  <div className="header__logo">
    <Grid>
      <Row>
        <Col md={ 12 }>
          <img src={ logo }
               alt="Edwards Limited" />
        </Col>
      </Row>
    </Grid>
  </div>
);

export default Logo;
