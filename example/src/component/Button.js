import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addOne, test } from '../store';

class Button extends Component {
  addOne() {
    this.props.addOne();
  }

  render() {
    return (
      <div>
        <button onClick={this.props.addOne}>+1</button>
        <button onClick={this.props.test}>test replace action</button>
      </div>
    );
  }
}

Button.propTypes = {
  addOne: PropTypes.func,
  test: PropTypes.func
};

export default connect(
  () => ({}),
  {
    addOne,
    test
  }
)(Button);
