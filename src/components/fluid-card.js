import React from 'react';
import { Animated } from 'react-native';

import { WIDTH } from '../global';

export const FluidCard = props => (
  <Animated.View
    style={[styles.cardStyle, props.style, { height: props.height }]}>
    {props.children}
  </Animated.View>
);

const styles = {
  cardStyle: {
    width: WIDTH * 0.8,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    borderRadius: 15,
    backgroundColor: '#fff',
  },
};
