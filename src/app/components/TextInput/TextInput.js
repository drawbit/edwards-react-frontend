import React, { Component } from 'react';
import './style.css';

class TextInput extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  render() {
    const { error, placeholder, type, value } = this.props;

    return (
      <div className="textinput">
        <input className="textinput__input"
               type={ type }
               placeholder={ placeholder }
               onChange={ this.onChange }
               defaultValue={ value } />
        { error && <div className="textinput__error">{ error }</div> }
      </div>
    );
  }

  onChange(event) {
    const { onChange } = this.props;
    onChange(event.target.value);
  }
}

TextInput.defaultProps = {
  error: null,
  onChange: () => {},
  placeholder: '',
  type: 'text'
};

export default TextInput;
