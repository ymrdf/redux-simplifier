import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Counter extends Component {
  render() {
    return (
      <div>
        <strong>{this.props.time}</strong>
        <br />
        <span>{this.props.number}</span>
      </div>
    );
  }
}

Counter.propTypes = {
  time: PropTypes.string,
  number: PropTypes.number
};

export default connect(
  state => ({
    number: state.number,
    time: state.aa.time
  }),
  {}
)(Counter);
