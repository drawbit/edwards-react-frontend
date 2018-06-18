import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Loading } from '../components';
import { getSelection, clearSelectionId } from '../actions/selection';

class Wrapper extends Component {
  componentWillMount() {
    const { getSelection, initializing, selectionId } = this.props;
    if (initializing) {
      getSelection(selectionId);
    }
  }

  render() {
    const { children, errors, initializing } = this.props;

    if (errors) {
      this.reset();
    }

    return (
      <div>
        { initializing && <Loading /> }
        { initializing || children }
      </div>
    );
  }

  reset() {
    clearSelectionId();
    window.location = '/';
  }
};

const mapStateToProps = (state) => {
  const { selection } = state;

  return {
    initializing: selection.selectionId && !selection.selection,
    selectionId: selection.selectionId,
    selection: selection.selection,
    errors: selection.errors
  }
};

const mapDispatchToProps = (dispatch) => ({
  getSelection: (id) => dispatch(getSelection(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wrapper);
