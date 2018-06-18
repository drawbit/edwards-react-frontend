import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { Page, Title, Product as ProductView } from '../../components';
import { getProduct } from '../../actions/product';
import './style.css';

class Product extends Component {
  componentWillMount() {
    const { getProduct, match: { params: { slug } } } = this.props;
    getProduct(slug);
  }

  render() {
    const { loading, product } = this.props;

    if (!product) return null;

    return (
      <Page loading={ loading }>
        <Grid>
          <Row>
            <Col md={ 10 }
                 mdOffset={ 1 }>
              <Title>
                { product.title }
              </Title>
            </Col>
          </Row>
          <ProductView { ...product } />
        </Grid>
      </Page>
    );
  }
}

const mapStateToProps = (state) => state.product;

const mapDispatchToProps = (dispatch) => ({
  getProduct: (slug) => dispatch(getProduct(slug))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
