import {
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAILURE,
  getUser
} from '../actions/user';

const defaultState = {
  loading: false,
  user: getUser()
};

const mapErrors = (errors) => {
  return {
    name: (errors.find(e => e.path === 'full_name') || {}).message,
    company: (errors.find(e => e.path === 'company_name') || {}).message,
    email: (errors.find(e => e.path === 'email_address') || {}).message,
    job: (errors.find(e => e.path === 'job_title') || {}).message
  };
}

const user = (state = defaultState, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return {
        loading: true,
        user: null
      };
    case USER_SUCCESS:
      return {
        loading: false,
        user: action.payload.id
      };
    case USER_FAILURE:
      return {
        loading: false,
        user: null,
        errors: mapErrors(action.payload.errors)
      };
    default:
      return state;
  }
};

export default user;
