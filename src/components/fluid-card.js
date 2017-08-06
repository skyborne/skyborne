import React from 'react';
import { Animated, View, Button, TouchableOpacity, Text } from 'react-native';

import { height, width } from '../global';

export class FluidCard extends React.Component {
  render() {
    this.style.height = this.props.height;
    return (
      <Animated.View style={[this.style, this.props.style]}>
        {this.props.children}
      </Animated.View>
    );
  }

  style = {
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
  };
}
