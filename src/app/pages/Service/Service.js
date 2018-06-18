import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { ButtonLink, Lozenge, Page } from '../../components';
import { getServices } from '../../actions/services';
import './style.css';

class Service extends Component {
  componentWillMount() {
    const { getServices, selectionId } = this.props;
    getServices(selectionId);
  }

  render() {
    let { loading, product, alternatives } = this.props;

    if (!product || !alternatives) return null;

    return (
      <Page loading={ loading } className="service">
        <Grid>
          <Row>
            <Col md={ 10 }
                mdOffset={ 1 }>
              <Lozenge title="Based on your answers, we recommend:"
                       body={ product.title } />
            </Col>
          </Row>
          <Row>
            <Col md={ 10 }
                 mdOffset={ 1 }>
              <div className="service__links">
                <ButtonLink href={ `/service/${ product.slug }` }>
                  More info
                </ButtonLink>
              </div>
            </Col>
          </Row>
        </Grid>
        <div className="service__full-width-wrapper">
          <Grid>
            <Row>
              <Col md={ 10 }
                  mdOffset={ 1 }>
                <div className="service__alternatives-title">
                  You could also consider:
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={ 10 }
                  mdOffset={ 1 }>
                <div className="service__links">
                  {
                    alternatives.map(({ slug, title }, index) => (
                      <ButtonLink href={ `/service/${ slug }` }
                                  key={ index }>
                        { title }
                      </ButtonLink>
                    ))
                  }
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={ 10 }
                  mdOffset={ 1 }>
                <div className="service__footnote">
                  Tip: Use the options at the top to change your selections and see other results!
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </Page>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.services.loading,
  product: (state.services.services || {}).product,
  alternatives: (state.services.services || {}).alternatives,
  selectionId: state.selection.selectionId
});

const mapDispatchToProps = (dispatch) => ({
  getServices: (id) => dispatch(getServices(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Service);
