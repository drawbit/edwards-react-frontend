import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { Page, Title, TextInput, NextButton } from '../../components';
import { create } from '../../actions/request';
import { getSelectionId } from '../../actions/selection';
import './style.css';

class Call extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: ''
    };

    this.submitForm = this.submitForm.bind(this);
  }

  render() {
    const { number } = this.state;
    const { errors } = this.props;

    return (
      <Page>
        <Grid>
          <Row>
            <Col md={ 10 }
                 mdOffset={ 1 }>
              <Title>
                “If you’d like us to call you for a conversation, please let us know your phone number below and we will be in touch.”
              </Title>
            </Col>
          </Row>
          <Row>
            <Col md={ 6 }
                 mdOffset={ 3 }>
              <form className="call__form"
                    onSubmit={ this.submitForm }>
                <TextInput onChange={ this.onChange.bind(this, 'number') }
                           placeholder="Enter your phone number"
                           value={ number }
                           type="number"
                           error={ errors && errors.contact } />
                <div className="call__button">
                  <NextButton disabled={ !number } />
                </div>
              </form>
            </Col>
          </Row>
        </Grid>
      </Page>
    );
  }

  onChange(name, value) {
    this.setState({
      [name]: value
    });
  }

  submitForm(event) {
    event.preventDefault();
    const { create, match: { params } } = this.props;
    const { number } = this.state;

    create({
      selection_id: getSelectionId(),
      product: params.slug,
      kind: 'call',
      contact: number
    });
  }
}

const mapStateToProps = (state) => state.request;

const mapDispatchToProps = (dispatch) => ({
  create: (request) => dispatch(create(request))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Call);
