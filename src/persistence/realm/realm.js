import Realm from 'realm';

class Trip extends Realm.Object {}
Trip.schema = {
  name: 'Trip',
  primaryKey: 'id',
  properties: {
    id: { type: 'string' },

    departureTime: { type: 'date' },
    arrivalTime: { type: 'date' },

    depatureAirportCode: { type: 'string' },
    arrivalAirportCode: { type: 'string' },
  },
};

export default new Realm({ schema: [Trip] });
