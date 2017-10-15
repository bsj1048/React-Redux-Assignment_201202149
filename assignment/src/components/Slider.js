import React, { Component, PropTypes } from 'react';
import Image from './Image';
import Control from './Control';

import { connect } from 'react-redux';

import * as actions from '../actions';


class Slider extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
              <Image
                counter={this.props.counter}
                img={this.props.img}
                />
              <Control
                onPrev={this.props.handlePrev}
                onNext={this.props.handleNext}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    handlePrev: () => { dispatch(actions.onPrev())},
    handleNext: () => { dispatch(actions.onNext())},
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
