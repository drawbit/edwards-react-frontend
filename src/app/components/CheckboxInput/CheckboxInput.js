import React, { Component } from 'react';
import './style.css';

class CheckboxInput extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  render() {
    const { label, value } = this.props;

    return (
      <div className="checkboxinput">
        <label className="checkboxinput__label">
          <input className="checkboxinput__input"
                 type="checkbox"
                 onChange={ this.onChange }
                 checked={ value } />
          { label }
        </label>
      </div>
    );
  }

  onChange(event) {
    const { onChange } = this.props;
    onChange(event.target.checked);
  }
}

CheckboxInput.defaultProps = {
  onChange: () => {},
  label: ''
};

export default CheckboxInput;
