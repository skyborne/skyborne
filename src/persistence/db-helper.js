import Realm from 'realm';

import TripSchema from './schemas/trip';

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
  let trip = realm.objectForPrimaryKey('Trip', id);
  return trip;
}

export function GetTrips() {
  let trips = realm.objects('Trip');
  return trips;
}

export function RemoveTrip(id) {
  try {
    realm.write(() => {
      let trip = realm.objectForPrimaryKey('Trip', id);
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

export function UpdateTrip(properties) {
  try {
    realm.write(() => {
      realm.create('Trip', properties, true);
    });
  } catch (error) {
    console.log(error);
  }
}

export function UpdateTripFlightNumber(id, flightNumber) {
  try {
    realm.write(() => {
      realm.create('Trip', { id: id, flightNumber: flightNumber }, true);
    });
  } catch (error) {
    console.log(error);
  }
}

export function UpdateTripDepartureTime(id, departureTime) {
  try {
    realm.write(() => {
      realm.create('Trip', { id: id, departureTime: departureTime }, true);
    });
  } catch (error) {
    console.log(error);
  }
}

export function UpdateTripArrivalTime(id, arrivalTime) {
  try {
    realm.write(() => {
      realm.create('Trip', { id: id, arrivalTime: arrivalTime }, true);
    });
  } catch (error) {
    console.log(error);
  }
}

export function UpdateTripDepartureAirportCode(id, depatureAirportCode) {
  try {
    realm.write(() => {
      realm.create(
        'Trip',
        { id: id, depatureAirportCode: depatureAirportCode },
        true,
      );
    });
  } catch (error) {
    console.log(error);
  }
}

export function UpdateTripArrivalAirportCode(id, arrivalAirportCode) {
  try {
    realm.write(() => {
      realm.create(
        'Trip',
        { id: id, arrivalAirportCode: arrivalAirportCode },
        true,
      );
    });
  } catch (error) {
    console.log(error);
  }
}

export function UpdateTripAirlineCode(id, airlineCode) {
  try {
    realm.write(() => {
      realm.create('Trip', { id: id, airlineCode: airlineCode }, true);
    });
  } catch (error) {
    console.log(error);
  }
}
