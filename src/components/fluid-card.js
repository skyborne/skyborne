import React from 'react';
import { View, Button, TouchableOpacity, Text } from 'react-native';

const FluidCard = props => {
  return (
    <View style={props.style}>
      {props.children}
    </View>
  );
};

export { FluidCard };
