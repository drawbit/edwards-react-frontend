import React, { Component } from 'react';
import { connect } from 'react-redux';
import { routerActions } from 'react-router-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { Page } from '../../components';
import loading from './assets/Calculating_Loader.svg';
import './style.css';

const WAIT_TIME = 3000;

class Calculating extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    setTimeout(() => {
      dispatch(routerActions.push('/service'));
    }, WAIT_TIME);
  }

  render() {
    return (
      <Page>
        <Grid>
          <Row>
            <Col md={ 12 }>
              <div className="calculating__image">
                <img src={ loading } alt="Loading" />
              </div>
            </Col>
          </Row>
        </Grid>
      </Page>
    );
  }
}

export default connect()(Calculating);
