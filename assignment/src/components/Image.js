import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  counter: PropTypes.number,
  img: []
};

const defaultProps = {
  counter: 0,
  img: ['https://placeimg.com/150/150/animals/sepia', 'https://placeimg.com/150/150/people/sepia', 'https://placeimg.com/150/150/tech/sepia']
};

class Image extends Component {

    render() {
        return(
            <div>
              <img src={this.props.img[this.props.counter]}/>
            </div>
        );
    }
}

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
