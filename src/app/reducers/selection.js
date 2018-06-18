import _ from 'lodash';
import {
  SELECTION_CREATE_REQUEST,
  SELECTION_CREATE_SUCCESS,
  SELECTION_CREATE_FAILURE,
  SELECTION_UPDATE_REQUEST,
  SELECTION_UPDATE_SUCCESS,
  SELECTION_UPDATE_FAILURE,
  SELECTION_GET_REQUEST,
  SELECTION_GET_SUCCESS,
  SELECTION_GET_FAILURE,
  SELECTION_RESET_REQUEST,
  SELECTION_RESET_SUCCESS,
  SELECTION_RESET_FAILURE,
  getSelectionId
} from '../actions/selection';

const defaultState = {
  loading: false,
  selectionId: getSelectionId(),
  selection: null
};

const selection = (state = defaultState, action) => {
  switch (action.type) {
    case SELECTION_CREATE_REQUEST:
      return {
        loading: true,
        selectionId: null,
        selection: null
      };
    case SELECTION_CREATE_SUCCESS:
      return {
        loading: false,
        selectionId: action.payload.id,
        selection: action.payload
      };
    case SELECTION_CREATE_FAILURE:
      return {
        loading: false,
        selectionId: null,
        selection: null,
        errors: action.payload.errors
      };
    case SELECTION_UPDATE_REQUEST:
      return _.assign(
        {},
        state,
        { loading: true }
      );
    case SELECTION_UPDATE_SUCCESS:
      return _.assign(
        {},
        state,
        { loading: false, selection: action.payload }
      );
    case SELECTION_UPDATE_FAILURE:
      return _.assign(
        {},
        state,
        { loading: false, errors: action.payload.errors }
      );
    case SELECTION_GET_REQUEST:
      return _.assign(
        {},
        state,
        { loading: true }
      );
    case SELECTION_GET_SUCCESS:
      return _.assign(
        {},
        state,
        { loading: false, selection: action.payload }
      );
    case SELECTION_GET_FAILURE:
      return _.assign(
        {},
        state,
        { loading: false, errors: action.payload.errors }
      );
    case SELECTION_RESET_REQUEST:
      return _.assign(
        {},
        state,
        { loading: true }
      );
    case SELECTION_RESET_SUCCESS:
      return _.assign(
        {},
        state,
        { loading: false, selection: action.payload }
      );
    case SELECTION_RESET_FAILURE:
      return _.assign(
        {},
        state,
        { loading: false, errors: action.payload.errors }
      );
    default:
      return state;
  }
};

export default selection;
