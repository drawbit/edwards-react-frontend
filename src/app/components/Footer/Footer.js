import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './style.css';

const Footer = () => (
  <footer className="footer">
    <Grid>
      <Row>
        <Col md={ 12 }>
          <div className="footer__text">
            © Edwards Limited 2017. All Rights Reserved.
          </div>
        </Col>
      </Row>
    </Grid>
  </footer>
);

export default Footer;
