import React from 'react';
import { View, AppRegistry } from 'react-native';

import Header from './src/components/header'

const Skyborne = () => (
   <View>
       <Header>Skyborne</Header>
   </View>
);

AppRegistry.registerComponent('Skyborne', () => Skyborne);
