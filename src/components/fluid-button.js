import React from 'react';
import { View, Button, TouchableOpacity, Text } from 'react-native';

export const FluidButton = props => {
  const style = {
    alignSelf: props.alignSelf,
    backgroundColor: props.backgroundColor,
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 15,
  };

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={style}>
        <Text
          style={{
            fontWeight: props.fontWeight,
            color: props.color,
            textAlign: 'center',
          }}>
          {props.children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
