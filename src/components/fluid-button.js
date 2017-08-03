import React from 'react';
import { View, Button, TouchableOpacity, Text } from 'react-native';

const FluidButton = props =>
  <TouchableOpacity onPress={props.onPress}>
    <View
      style={{
        backgroundColor: props.backgroundColor,
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 15,
        alignSelf: props.alignSelf,
      }}>
      <Text
        style={{
          fontWeight: props.fontWeight,
          color: props.color,
          textAlign: 'center',
        }}>
        {props.children}
      </Text>
    </View>
  </TouchableOpacity>;

export { FluidButton };
