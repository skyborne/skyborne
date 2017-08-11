import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export const FluidButton = props => {
  props.alignSelf
    ? (styles.viewStyle.alignSelf = props.alignSelf)
    : (styles.viewStyle.alignSelf = 'stretch');

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.viewStyle, props.style]}>
      <View>
        <Text style={[styles.textStyle, props.textStyle]}>
          {props.children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#fff',
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
  },

  textStyle: {
    fontWeight: '400',
    color: '#000',
    textAlign: 'center',
  },
};
