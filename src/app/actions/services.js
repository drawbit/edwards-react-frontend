export const SERVICES_REQUEST = 'SERVICES_REQUEST';
export const SERVICES_SUCCESS = 'SERVICES_SUCCESS';
export const SERVICES_FAILURE = 'SERVICES_FAILURE';

const servicesRequest = () => {
  return {
    type: SERVICES_REQUEST
  };
};

const servicesSuccess = (body) => {
  return {
    type: SERVICES_SUCCESS,
    payload: body
  };
};

const servicesFailure = (body) => {
  return {
    type: SERVICES_FAILURE,
    payload: body
  };
};

export const getServices = (id) => {
  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return (dispatch) => {
    dispatch(servicesRequest());
    fetch(`/api/selections/${ id }/products`, config)
      .then(response => {
        response.json()
                .then(body => {
                  if (!response.ok) {
                    dispatch(servicesFailure(body));
                  }
                  else {
                    dispatch(servicesSuccess(body));
                  }
                });
      });
  }
}
