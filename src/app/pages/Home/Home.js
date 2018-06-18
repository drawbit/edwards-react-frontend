import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { ButtonLink, Lozenge } from '../../components';
import './style.css';

const Home = () => (
  <div className="home">
    <Grid>
      <Row>
        <Col md={ 10 }
             mdOffset={ 1 }>
          <Lozenge title="Welcome to your five step Edwards interactive service assistant"
                   body="Ready to find <br/>out more?" />
        </Col>
      </Row>
      <Row>
        <Col md={ 12 }>
          <div className="home__button">
            <ButtonLink href="/details">
              Let's begin
            </ButtonLink>
          </div>
        </Col>
      </Row>
    </Grid>
  </div>
);

export default Home;
