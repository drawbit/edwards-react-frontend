import {
  SERVICES_REQUEST,
  SERVICES_SUCCESS,
  SERVICES_FAILURE
} from '../actions/services';

const defaultState = {
  loading: false,
  services: null
};

const services = (state = defaultState, action) => {
  switch (action.type) {
    case SERVICES_REQUEST:
      return {
        loading: true,
        services: null
      };
    case SERVICES_SUCCESS:
      return {
        loading: false,
        services: action.payload
      };
    case SERVICES_FAILURE:
      return {
        loading: false,
        services: null,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default services;
