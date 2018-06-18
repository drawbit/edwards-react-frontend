import React, { Component } from 'react';
import classNames from 'classnames';
import './style.css';

class Loading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    };
  }

  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.setState({ show: true });
    }, 200);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    const { show } = this.state;
    const classnames = classNames('loading', { 'loading--show': show });

    return (
      <div className={ classnames }>
        <div className="spinner" />
      </div>
    );
  }
}

export default Loading;
