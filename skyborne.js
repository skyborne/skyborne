import React, { Component } from 'react';
import { View, AppRegistry } from 'react-native';

import { Header } from './src/components';
import { Tabs } from './src/config/router';

const Skyborne = () => (
   <Tabs />
);

AppRegistry.registerComponent('Skyborne', () => Skyborne);
