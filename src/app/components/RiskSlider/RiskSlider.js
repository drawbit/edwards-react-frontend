import React, { Component } from 'react';
import ReactSlider from 'react-slider';
import './style.css';

const MIN = 0;
const MAX = 100;
const INITIAL_VALUE = MAX;

class RiskSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: this.findSelected(INITIAL_VALUE),
      value: INITIAL_VALUE
    };

    this.onChange = this.onChange.bind(this);
  }

  render() {
    const { selected, value } = this.state;

    return (
      <div className="riskslider">
        <div className="riskslider__instructions">
          Drag the slider to select a level of concern
        </div>
        <ReactSlider className="riskslider__slider"
                     defaultValue={ value }
                     onChange={ this.onChange }
                     min={ MIN }
                     max={ MAX }>
          <div className={ `handle handle--${ selected.id }` } />
        </ReactSlider>
        <div className="riskslider__label">
          “{ selected.label }”
        </div>
      </div>
    );
  }

  onChange(value) {
    const { onSelect } = this.props;
    const option = this.findSelected(value);
    this.setState({ selected: option });
    onSelect(option);
  }

  findSelected(value) {
    const { options } = this.props;
    const percentage = value / ((MAX - MIN) + 1);
    const optionIndex = Math.floor(percentage * options.length);
    return options[optionIndex];
  }
}

export default RiskSlider;
