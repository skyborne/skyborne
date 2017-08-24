import React from 'react';
import { View, Text } from 'react-native';

import { HEIGHT, WIDTH } from '../global';

export const FluidHeader = props => {
  const styles = {
    ViewStyle: {
      height: HEIGHT * 0.18,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      borderColor: '#000',
      marginBottom: HEIGHT * 0.08,
    },

    TextStyle: {
      fontFamily: 'Rubik',
      fontSize: 40,
      marginRight: WIDTH * 0.1,
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
