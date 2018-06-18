import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import Option from './Option';
import OPTIONS from './options';
import { Page, Title, NextButton } from '../../components';
import { create } from '../../actions/selection';
import './style.css';

class Start extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: null
    };

    this.select = this.select.bind(this);
    this.start = this.start.bind(this);
  }

  render() {
    const { selected } = this.state;

    return (
      <Page className="start">
        <Grid>
          <Row>
            <Col md={ 10 }
                 mdOffset={ 1 }>
              <Title>
                Please select where you would like to start…
              </Title>
            </Col>
          </Row>
        </Grid>
        <ul className="selection__options">
          {
            OPTIONS.map(selection => (
              <Option isActive={ selection.type === selected }
                      onSelect={ () => this.select(selection.type) }
                      { ...selection }
                      key={ selection.type } />
            ))
          }
        </ul>
        <Grid>
          <Row>
            <Col md={ 12 }>
              <div className="selection__button">
                <NextButton disabled={ !selected }
                            onClick={ this.start } />
              </div>
            </Col>
          </Row>
        </Grid>
      </Page>
    );
  }

  select(selected) {
    this.setState({ selected });
  }

  start(event) {
    event.preventDefault();
    const { create } = this.props;
    const { selected } = this.state;

    create(selected);
  }
}

const mapStateToProps = (state) => state.selection;

const mapDispatchToProps = (dispatch) => ({
  create: (selected) => dispatch(create(selected))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Start);
