import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { Page, Title, NextButton } from '../../components';
import { create } from '../../actions/request';
import { getSelectionId } from '../../actions/selection';
import './style.css';

class Email extends Component {
  constructor(props) {
    super(props);

    this.submitForm = this.submitForm.bind(this);
  }

  render() {
    return (
      <Page>
        <Grid>
          <Row>
            <Col md={ 10 }
                 mdOffset={ 1 }>
              <Title>
                “If you’d like us to email you for a conversation, please let us know and we will be in touch.”
              </Title>
            </Col>
          </Row>
          <Row>
            <Col md={ 6 }
                 mdOffset={ 3 }>
              <form className="email__form"
                    onSubmit={ this.submitForm }>
                <div>
                  <NextButton />
                </div>
              </form>
            </Col>
          </Row>
        </Grid>
      </Page>
    );
  }

  submitForm(event) {
    event.preventDefault();
    const { create, match: { params } } = this.props;

    create({
      selection_id: getSelectionId(),
      product: params.slug,
      kind: 'email'
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
)(Email);
