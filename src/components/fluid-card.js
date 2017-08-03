import React from 'react';
import { View, Button, TouchableOpacity, Text } from 'react-native';

const FluidCard = props => {
  return (
    <View>
      {props.children}
    </View>
  );
};

const styles = {
  height: 350,
  width: 300,
};

export { FluidCard };
