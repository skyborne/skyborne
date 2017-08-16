import Realm from 'realm';

class Trip extends Realm.Object {}
const TripSchema = {
  name: 'Trip',
  primaryKey: 'id',
  properties: {
    id: 'string',

    airlineCode: 'string',
    flightNumber: 'int',

    departureTime: 'date',
    arrivalTime: 'date',

    depatureAirportCode: 'string',
    arrivalAirportCode: 'string',
  },
};

export default TripSchema;
