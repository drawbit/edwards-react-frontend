import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Page, Title, ButtonLink } from '../../components';
import checkIcon from './assets/Icon_check@2x.png';
import './style.css';

const Thanks = () => (
  <Page>
    <Grid>
      <Row>
        <Col md={ 10 }
             mdOffset={ 1 }>
          <Title>
            Thanks, we will be in touch soon…
          </Title>
        </Col>
      </Row>
      <Row>
        <Col md={ 4 }
             mdOffset={ 4 }>
          <img className='thanks__icon'
               src={ checkIcon }
               alt="Check mark" />
        </Col>
      </Row>
      <Row>
        <Col md={ 6 }
             mdOffset={ 3 }>
          <div className="thanks__button">
            <ButtonLink href='./'>
              Done
            </ButtonLink>
          </div>
        </Col>
      </Row>
    </Grid>
  </Page>
);

export default Thanks;
