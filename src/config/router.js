import React from 'react';
import { TabNavigator } from 'react-navigation';

import Ongoing from '../screens/ongoing';
import Timeline from '../screens/timeline';
import Profile from '../screens/profile';

import { height } from '../global';

import Icon from '../resources/icon';

export const Tabs = TabNavigator(
  {
    Timeline: {
      screen: Timeline,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
          <Icon name="List-2" size={30} color={tintColor} />,
      },
    },

    Ongoing: {
      screen: Ongoing,
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
        backgroundColor: '#fff',
        borderTopWidth: 0,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: -1 },
      },
    },
    initialRouteName: 'Ongoing',
  },
);
