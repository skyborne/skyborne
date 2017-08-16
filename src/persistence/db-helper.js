import Realm from 'realm';

import { TripSchema } from './schema';

const realm = new Realm({ schema: [TripSchema] });

export function AddTrip(properties) {
  try {
    realm.write(() => {
      realm.create('Trip', properties);
    });
  } catch (error) {
    console.log(error);
  }
}

export function GetTrip(id) {
  let trip = realm.objects('Trip').filtered(`id = "${id}"`);
  return trip;
}

export function GetTrips() {
  let trips = realm.objects('Trip');
  return trips;
}

export function RemoveTrip(id) {
  try {
    realm.write(() => {
      let trip = realm.objects('Trip').filtered(`id = "${id}"`);
      realm.delete(trip);
    });
  } catch (error) {
    console.log(error);
  }
}

export function RemoveTrips() {
  try {
    realm.write(() => {
      let trips = realm.objects('Trip');
      realm.delete(trips);
    });
  } catch (error) {
    console.log(error);
  }
}
