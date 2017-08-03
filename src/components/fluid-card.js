import React from 'react';
import { View, Button, TouchableOpacity, Text } from 'react-native';

const FluidCard = props => {
  return (
    <View style={styles.cardStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  cardStyle: {
    height: 350,
    width: 300,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    padding: 15,
    alignSelf: 'center',
    borderRadius: 15,
    backgroundColor: '#fff',
  },
};

export { FluidCard };
