import React from 'react';
import { TabNavigator } from 'react-navigation';

import ActiveTrip from '../screens/active-trip';
import PastTrips from '../screens/past-trips';

export const Tabs = TabNavigator({
    PastTrips: {
        screen: PastTrips,
    },

    ActiveTrip: {
        screen: ActiveTrip,
    }
});
