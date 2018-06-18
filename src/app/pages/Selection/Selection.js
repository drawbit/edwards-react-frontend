import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { Page, Title, NextButton } from '../../components';
import renderOptions from './renderOptions';
import { reset, update } from '../../actions/selection';
import './style.css';

class Selection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: {
        id: null
      }
    };

    this.select = this.select.bind(this);
    this.next = this.next.bind(this);
  }

  componentWillMount() {
    const {
      loading,
      reset,
      selection: { current },
      selectionId,
      type
    } = this.props;

    if (loading || (current && current.type === type)) {
      return;
    }

    reset(type, selectionId);
  }

  render() {
    const { loading, renderOptions, selection, title } = this.props;
    if (!selection || !selection.current) return null;

    const { current: { options } } = selection;
    const { selected } = this.state;

    return (
      <Page loading={ loading } className="selection">
        <Grid>
          <Row>
            <Col md={ 10 }
                 mdOffset={ 1 }>
              <Title>
                { title }
              </Title>
            </Col>
          </Row>
          <Row>
            <Col xs={ 12 }>
              { renderOptions(options, this.select, selected) }
            </Col>
          </Row>
          <Row>
            <Col md={ 12 }>
              <div className="selection__button">
                <NextButton disabled={ !selected.id }
                            onClick={ this.next } />
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

  next(event) {
    event.preventDefault();
    const { selection, selectionId, update } = this.props;
    const { current: { type } } = selection;
    const { selected } = this.state;

    update(
      {
        id: selected.id,
        type: type,
        value: selected.label
      },
      selectionId
    );
  }
}

Selection.defaultProps = {
  renderOptions: renderOptions,
  title: 'Title',
  type: 'TYPE'
};

const mapStateToProps = (state) => state.selection;

const mapDispatchToProps = (dispatch) => ({
  reset: (type, id) => dispatch(reset(type, id)),
  update: (selected, id) => dispatch(update(selected, id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Selection);
