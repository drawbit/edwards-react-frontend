import {
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_FAILURE
} from '../actions/product';

const defaultState = {
  loading: false,
  product: null
};

const product = (state = defaultState, action) => {
  switch (action.type) {
    case PRODUCT_REQUEST:
      return {
        loading: true,
        product: null
      };
    case PRODUCT_SUCCESS:
      return {
        loading: false,
        product: action.payload
      };
    case PRODUCT_FAILURE:
      return {
        loading: false,
        product: null,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default product;
