import React from 'react';
import { View, Text } from 'react-native';

const Header = props =>
  <View style={styles.ViewStyle}>
    <Text style={styles.TextStyle}>
      {props.children}
    </Text>
  </View>;

const styles = {
  ViewStyle: {
    height: 125,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderColor: '#000',
    borderBottomWidth: 1,
  },

  TextStyle: {
    fontFamily: 'Rubik',
    fontSize: 48,
    paddingRight: 30,
    fontWeight: '500',
  },
};

export { Header };
