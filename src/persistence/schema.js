const TripSchema = {
  name: 'Trip',
  primaryKey: 'id',
  properties: {
    id: 'string',

    flightNumber: 'int',

    departureTime: 'date',
    arrivalTime: 'date',

    depatureAirportCode: 'string',
    arrivalAirportCode: 'string',

    airlineCode: 'string',
  },
};

export default TripSchema;
