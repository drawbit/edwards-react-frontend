export const PRODUCT_REQUEST = 'PRODUCT_REQUEST';
export const PRODUCT_SUCCESS = 'PRODUCT_SUCCESS';
export const PRODUCT_FAILURE = 'PRODUCT_FAILURE';

const productRequest = () => {
  return {
    type: PRODUCT_REQUEST
  };
};

const productSuccess = (body) => {
  return {
    type: PRODUCT_SUCCESS,
    payload: body
  };
};

const productFailure = (body) => {
  return {
    type: PRODUCT_FAILURE,
    payload: body
  };
};

export const getProduct = (slug) => {
  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return (dispatch) => {
    dispatch(productRequest());
    fetch(`/api/products/${ slug }`, config)
      .then(response => {
        response.json()
                .then(body => {
                  if (!response.ok) {
                    dispatch(productFailure(body));
                  }
                  else {
                    dispatch(productSuccess(body));
                  }
                });
      });
  }
}
