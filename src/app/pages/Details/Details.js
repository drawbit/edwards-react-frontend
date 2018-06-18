import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import _ from 'lodash';
import {
  Page,
  Title,
  TextInput,
  CheckboxInput,
  NextButton
} from '../../components';
import { create } from '../../actions/user';
import './style.css';

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: '',
        company: '',
        email: '',
        job: '',
        marketing: false
      }
    };

    this.submitForm = this.submitForm.bind(this);
  }

  render() {
    const { errors, loading } = this.props;
    const { user } = this.state;

    return (
      <Page loading={ loading } className="details">
        <Grid>
          <Row>
            <Col md={ 10 }
                 mdOffset={ 1 }>
              <Title>
                Please tell us a bit about yourself...
              </Title>
            </Col>
          </Row>
          <Row>
            <Col md={ 6 }
                 mdOffset={ 3 }>
              <form className="details__form"
                    onSubmit={ this.submitForm }
                    noValidate>
                <TextInput onChange={ this.onChange.bind(this, 'name') }
                           placeholder="Name"
                           value={ user.name }
                           error={ errors && errors.name } />
                <TextInput onChange={ this.onChange.bind(this, 'company') }
                           placeholder="Company"
                           value={ user.company }
                           error={ errors && errors.company } />
                <TextInput onChange={ this.onChange.bind(this, 'email') }
                           placeholder="Email"
                           value={ user.email }
                           type="email"
                           error={ errors && errors.email } />
                <TextInput onChange={ this.onChange.bind(this, 'job') }
                           placeholder="Job Title"
                           value={ user.job }
                           error={ errors && errors.job } />
                <CheckboxInput onChange={ this.onChange.bind(this, 'marketing') }
                               value={ user.marketing }
                               label="I am happy to recieve emails and other communication from Edwards. Edwards will not pass on any information to 3rd parties." />
                <div>
                  <NextButton disabled={ !this.buttonEnabled() } />
                </div>
              </form>
            </Col>
          </Row>
        </Grid>
      </Page>
    );
  }

  onChange(name, value) {
    const { user } = this.state;
    this.setState({
      user: Object.assign({}, user, { [name]: value })
    });
  }

  buttonEnabled() {
    const { user } = this.state;
    return _.chain(user)
            .values()
            .map(value => value !== '')
            .every()
            .value();
  }

  submitForm(event) {
    event.preventDefault();
    const { create } = this.props;
    const { user } = this.state;

    create(user);
  }
}

const mapStateToProps = (state) => state.user;

const mapDispatchToProps = (dispatch) => ({
  create: (user) => dispatch(create(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
