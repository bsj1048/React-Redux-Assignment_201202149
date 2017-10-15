import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onPrev: PropTypes.func,
  onNext: PropTypes.func
};

function createWarning(funcName){
  return () => console.warn(funcName + "is not defined");
}

const defaultProps = {
  onPrev: createWarning('onPrev'),
  onNext: createWarning('onNext')
};

class Control extends Component {

    render() {
        return(
            <div>
              <button onClick={this.props.onPrev}>&lt;</button>
              <button onClick={this.props.onNext}>&gt;</button>
            </div>
        );
    }
}

Control.propTypes = propTypes;
Control.defaultProps = defaultProps;

export default Control;
