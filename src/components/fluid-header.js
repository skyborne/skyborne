import React from 'react';
import { View, Text } from 'react-native';

import { height, width } from './';

export const FluidHeader = props => {
  const styles = {
    ViewStyle: {
      height: height * 0.18,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      borderColor: '#000',
    },

    TextStyle: {
      fontFamily: 'Rubik',
      fontSize: 40,
      paddingRight: width * 0.08,
      fontWeight: '500',
    },
  };
  return (
    <View style={styles.ViewStyle}>
      <Text style={styles.TextStyle}>
        {props.children}
      </Text>
    </View>
  );
};
