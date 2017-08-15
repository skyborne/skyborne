import Realm from 'realm';

import { TripSchema } from './schema';

const realm = new Realm({ schema: [TripSchema] });

export function AddTrip(properties) {
  realm.create('Trip', properties);
}

export function ClearTrips() {
  try {
    realm.write(() => {
      let trips = realm.objects('Trip');
      realm.delete(trips);
    });
  } catch (error) {
    console.log(error);
  }
}
