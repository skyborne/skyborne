import React from 'react';
import { TabNavigator } from 'react-navigation';

import ActiveTrip from '../screens/active-trip';
import PastTrips from '../screens/past-trips';

import {createIconSetFromFontello} from 'react-native-vector-icons';
import fontelloConfig from '../../assets/fonts/edge-icon/config.json';

const Icon = createIconSetFromFontello(fontelloConfig);

export const Tabs = TabNavigator(
  {
    PastTrips: {
      screen: PastTrips,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
          <Icon name="compass" size={30} color={tintColor} />,
      },
    },

    ActiveTrip: {
      screen: ActiveTrip,
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#000',
      style: {
        height: 60,
        borderTopWidth: 0.5,
        backgroundColor: '#fff',
      },
    },
  },
);
