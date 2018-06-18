import {
  REQUEST_REQUEST,
  REQUEST_SUCCESS,
  REQUEST_FAILURE
} from '../actions/request';

const defaultState = {
  loading: false
};

const mapErrors = (errors) => {
  return {
    contact: (errors.find(e => e.path === 'contact') || {}).message
  };
}

const request = (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_REQUEST:
      return {
        loading: true
      };
    case REQUEST_SUCCESS:
      return {
        loading: false
      };
    case REQUEST_FAILURE:
      return {
        loading: false,
        errors: mapErrors(action.payload.errors)
      };
    default:
      return state;
  }
};

export default request;
