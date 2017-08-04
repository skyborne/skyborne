import React from 'react';
import { View, Text } from 'react-native';

const FluidHeader = props =>
  <View style={styles.ViewStyle}>
    <Text style={styles.TextStyle}>
      {props.children}
    </Text>
  </View>;

const styles = {
  ViewStyle: {
    height: 120,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderColor: '#000',
    marginBottom: 50,
  },

  TextStyle: {
    fontFamily: 'Rubik',
    fontSize: 40,
    paddingRight: 30,
    fontWeight: '500',
  },
};

export { FluidHeader };
