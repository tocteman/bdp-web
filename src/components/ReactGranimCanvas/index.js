import React from 'react';
import PropsType from 'prop-types';
import Granim from 'granim';

export default class GranimCanvas extends React.Component {
  state = {
    granim: undefined
  }

  componentDidMount() {
    this.setState({
      granim: new Granim({ ...this.props })
    });
  }

  render() {
    return (
      <canvas id="granim-canvas" style={this.props.style}></canvas>
    );
  }
}

GranimCanvas.defaultProps = {
  direction: 'diagonal',
  element: '#granim-canvas',
  opacity: [1, 1],
  states: {
    "default-state": {
      gradients: [
        ['#1f9d55', '#3e9ce8'],
        ['#296699', '#17C671'],
        ['#117c41', '#388dd1'],
      ],
      transitionSpeed: 2000
    }
  },
  style: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1
  }
};

GranimCanvas.propsType = {
  direction: PropsType.oneOf(new Array("diagonal", 'left-right', 'top-bottom', 'radial')),
  opacity: PropsType.arrayOf(PropsType.number),
  isPausedWhenNotInView: PropsType.bool,
  stateTransitionSpeed: PropsType.number,
  defaultStateName: PropsType.string,
  onStart: PropsType.func,
  onGradientChange: PropsType.func,
  onEnd: PropsType.func
}