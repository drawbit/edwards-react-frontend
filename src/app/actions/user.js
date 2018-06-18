import { routerActions } from 'react-router-redux';
import { read, write } from '../services/cookie';

export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAILURE = 'USER_FAILURE';
export const USER_RESET = 'USER_RESET';

export const setUser = (user) => {
  write('user', user);
}

export const getUser = () => {
  return read('user');
}

const userRequest = () => ({
  type: USER_REQUEST
});

const userSuccess = (body) => {
  write('user', body.id);
  return {
    type: USER_SUCCESS,
    payload: body
  };
};

const userFailure = (body) => {
  return {
    type: USER_FAILURE,
    payload: body
  };
};

export const create = (user) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      full_name: user.name,
      company_name: user.company,
      email_address: user.email,
      job_title: user.job,
      marketing_confirmation: user.marketing
    })
  };

  return (dispatch) => {
    dispatch(userRequest());
    fetch('/api/users', config)
      .then(response => {
        response.json()
                .then(body => {
                  if (!response.ok) {
                    dispatch(userFailure(body));
                  }
                  else {
                    dispatch(userSuccess(body));
                    dispatch(routerActions.push('/selection'));
                  }
                });
      });
  }
};
