import React from 'react';
import { Animated, View, Button, TouchableOpacity, Text } from 'react-native';

import { height, width } from '../global';

export class FluidCard extends React.Component {
  state = {
    fade: new Animated.Value(0),
  };

  componentWillMount() {
    Animated.timing(this.state.fade, {
      toValue: 1,
      duration: 2000,
    }).start();
  }

  render() {
    this.style.height = this.props.height;

    return (
      <Animated.View style={this.style}>
        {this.props.children}
      </Animated.View>
    );
  }

  style = {
    top: height * 0.08,
    width: width * 0.8,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    padding: width * 0.04,
    alignSelf: 'center',
    borderRadius: 15,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: this.state.fade,
  };
}
