import React from 'react';
import { Animated, View, Button, TouchableOpacity, Text } from 'react-native';

export class FluidCard extends React.Component {
  state = {
    fade: new Animated.Value(0),
  };

  componentWillMount() {
    Animated.timing(this.state.fade, {
      toValue: 1,
      duration: 5000,
    }).start();
  }

  render() {
    let { fade } = this.state;

    return (
      <Animated.View style={{ ...this.props.style, opacity: fade }}>
        {this.props.children}
      </Animated.View>
    );
  }
}
