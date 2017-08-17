const TripSchema = {
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

export default TripSchema;
