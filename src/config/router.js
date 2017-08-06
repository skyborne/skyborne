import React from 'react';
import { TabNavigator } from 'react-navigation';

import ActiveTrip from '../screens/active-trip';
import PastTrips from '../screens/past-trips';
import Profile from '../screens/profile';

import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../assets/fonts/edge-icon/config.json';

import { height, width } from '../global';

const Icon = createIconSetFromIcoMoon(icoMoonConfig);

export const Tabs = TabNavigator(
  {
    PastTrips: {
      screen: PastTrips,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
          <Icon name="List-2" size={30} color={tintColor} />,
      },
    },

    ActiveTrip: {
      screen: ActiveTrip,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
          <Icon name="Hot-Air-Balloon" size={30} color={tintColor} />,
      },
    },

    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
          <Icon name="User" size={30} color={tintColor} />,
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#000',
      style: {
        paddingTop: height * 0.04,
        paddingBottom: height * 0.04,
        // borderTopWidth: 1,
        backgroundColor: '#fff',
      },
    },
    initialRouteName: 'ActiveTrip',
  },
);
