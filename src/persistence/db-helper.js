import realm from './realm/realm';

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
  return realm.objectForPrimaryKey('Trip', id);
}

export function GetTrips() {
  return realm.objects('Trip');
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
        { id: id, departureAirportCode: depatureAirportCode },
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
