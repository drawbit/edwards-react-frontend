import { routerActions } from 'react-router-redux';

export const REQUEST_REQUEST = 'REQUEST_REQUEST';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAILURE = 'REQUEST_FAILURE';

const requestRequest = () => ({
  type: REQUEST_REQUEST
});

const requestSuccess = (body) => {
  return {
    type: REQUEST_SUCCESS,
    payload: body
  };
};

const requestFailure = (body) => {
  return {
    type: REQUEST_FAILURE,
    payload: body
  };
};

export const create = (a) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      selection_id: a.selection_id,
      product: a.product,
      kind: a.kind,
      contact: a.contact
    })
  };

  return (dispatch) => {
    dispatch(requestRequest());
    fetch('/api/requests', config)
      .then(response => {
        response.json()
                .then(body => {
                  if (!response.ok) {
                    dispatch(requestFailure(body));
                  }
                  else {
                    dispatch(requestSuccess(body));
                    dispatch(routerActions.push('./thanks'));
                  }
                });
      });
  }
};
