import { routerActions } from 'react-router-redux';
import _ from 'lodash';
import { read, write, clear } from '../services/cookie';
import { getUser } from './user';

export const SELECTION_CREATE_REQUEST = 'SELECTION_CREATE_REQUEST';
export const SELECTION_CREATE_SUCCESS = 'SELECTION_CREATE_SUCCESS';
export const SELECTION_CREATE_FAILURE = 'SELECTION_CREATE_FAILURE';
export const SELECTION_UPDATE_REQUEST = 'SELECTION_UPDATE_REQUEST';
export const SELECTION_UPDATE_SUCCESS = 'SELECTION_UPDATE_SUCCESS';
export const SELECTION_UPDATE_FAILURE = 'SELECTION_UPDATE_FAILURE';
export const SELECTION_GET_REQUEST = 'SELECTION_GET_REQUEST';
export const SELECTION_GET_SUCCESS = 'SELECTION_GET_SUCCESS';
export const SELECTION_GET_FAILURE = 'SELECTION_GET_FAILURE';
export const SELECTION_RESET_REQUEST = 'SELECTION_RESET_REQUEST';
export const SELECTION_RESET_SUCCESS = 'SELECTION_RESET_SUCCESS';
export const SELECTION_RESET_FAILURE = 'SELECTION_RESET_FAILURE';

export const setSelectionId = (selectionId) => {
  write('selectionId', selectionId);
}

export const getSelectionId = () => {
  return read('selectionId');
}

export const clearSelectionId = () => {
  clear('selectionId');
}

const selectionCreateRequest = () => {
  return {
    type: SELECTION_CREATE_REQUEST
  };
}

const selectionCreateSuccess = (body) => {
  setSelectionId(body.id);
  return {
    type: SELECTION_CREATE_SUCCESS,
    payload: body
  };
}

const selectionCreateFailure = (body) => {
  return {
    type: SELECTION_CREATE_FAILURE,
    payload: body
  };
}

export const create = (startType) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user_id: getUser(),
      start: startType
    })
  };

  return (dispatch) => {
    dispatch(selectionCreateRequest());
    fetch('/api/selections', config)
      .then(response => {
        response.json()
                .then(body => {
                  if (!response.ok) {
                    dispatch(selectionCreateFailure(body));
                  }
                  else {
                    dispatch(selectionCreateSuccess(body));
                    const next = body.current.type.toLowerCase();
                    dispatch(
                      routerActions.push(`/selection/${ next }`)
                    );
                  }
                });
      });
  }
}

const selectionUpdateRequest = () => {
  return {
    type: SELECTION_UPDATE_REQUEST
  };
}

const selectionUpdateSuccess = (body) => {
  return {
    type: SELECTION_UPDATE_SUCCESS,
    payload: body
  };
}

const selectionUpdateFailure = (body) => {
  return {
    type: SELECTION_UPDATE_FAILURE,
    payload: body
  };
}

const nextPath = (body) => {
  if (body.status === 'completed') {
    const currentPath = window.location.pathname;
    if (_.startsWith(currentPath, '/service')) {
      return currentPath;
    }
    else {
      return '/calculating';
    }
  }
  else {
    const next = body.current.type.toLowerCase();
    return `/selection/${ next }`;
  }
}

export const update = (option, selectionId) => {
  const config = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: option.id,
      type: option.type,
      value: option.value
    })
  };

  return (dispatch) => {
    dispatch(selectionUpdateRequest());
    fetch(`/api/selections/${ selectionId }`, config)
      .then(response => {
        response.json()
                .then(body => {
                  if (!response.ok) {
                    dispatch(selectionUpdateFailure(body));
                  }
                  else {
                    dispatch(
                      routerActions.push(nextPath(body))
                    );
                    dispatch(selectionUpdateSuccess(body));
                  }
                });
      });
  }
}

const selectionGetRequest = () => {
  return {
    type: SELECTION_GET_REQUEST
  };
}

const selectionGetSuccess = (body) => {
  return {
    type: SELECTION_GET_SUCCESS,
    payload: body
  };
}

const selectionGetFailure = (body) => {
  return {
    type: SELECTION_GET_FAILURE,
    payload: body
  };
}

export const getSelection = (selectionId) => {
  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return (dispatch) => {
    dispatch(selectionGetRequest());
    fetch(`/api/selections/${ selectionId }`, config)
      .then(response => {
        response.json()
                .then(body => {
                  if (!response.ok) {
                    dispatch(selectionGetFailure(body));
                  }
                  else {
                    dispatch(
                      routerActions.push(nextPath(body))
                    );
                    dispatch(selectionGetSuccess(body));
                  }
                });
      });
  }
}

const selectionResetRequest = () => {
  return {
    type: SELECTION_RESET_REQUEST
  };
}

const selectionResetSuccess = (body) => {
  return {
    type: SELECTION_RESET_SUCCESS,
    payload: body
  };
}

const selectionResetFailure = (body) => {
  return {
    type: SELECTION_RESET_FAILURE,
    payload: body
  };
}

export const reset = (type, selectionId) => {
  const config = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      type: type
    })
  };

  return (dispatch) => {
    dispatch(selectionResetRequest());
    fetch(`/api/selections/${ selectionId }/reset`, config)
      .then(response => {
        response.json()
                .then(body => {
                  if (!response.ok) {
                    dispatch(selectionResetFailure(body));
                  }
                  else {
                    dispatch(selectionResetSuccess(body));
                  }
                });
      });
  }
}
