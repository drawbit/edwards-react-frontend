import React from 'react';
import './style.css';

const NextButton = ({ disabled, onClick }) => (
  <button className="nextbutton"
          disabled={ disabled }
          onClick={ onClick }>
    Next
  </button>
);

NextButton.defaultProps = {
  disabled: false,
  onClick: () => { }
}

export default NextButton;
