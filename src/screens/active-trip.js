import React, { Component } from 'react';
import { Button, Clipboard, Text, TouchableOpacity, View } from 'react-native';

import { FluidCard, FluidHeader, FluidButton } from '../components';

class ActiveTrip extends Component {
  state = { id: '', results: {} };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.fetchID();
  }

  copyID = id => {
    Clipboard.setString(id);
  };

  fetchID = () => {
    fetch('http://localhost:8000/v1/keygen')
      .then(response => response.json())
      .then(responseJSON => {
        this.setState({ id: responseJSON.id });
      })
      .catch(error => {
        console.log('Failed to fetch response.', error);
      });
  };

  fetchResults = () => {
    fetch('http://localhost:8000/v1/results?id=' + this.state.id)
      .then(response => response.json())
      .then(responseJSON => {
        this.setState({ results: responseJSON });
      })
      .catch(error => {
        console.log('Failed to fetch response.', error);
      });
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <FluidHeader>Active Trip</FluidHeader>
        <TouchableOpacity>
          <FluidCard style={styles.cardStyle}>
            <Text style={styles.textStyle}>Tap to add a new trip.</Text>
          </FluidCard>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  textStyle: {
    fontFamily: 'Rubik',
    fontSize: 18,
    fontWeight: '200',
    textAlign: 'center',
  },
  cardStyle: {
    height: 350,
    width: 300,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    padding: 15,
    alignSelf: 'center',
    borderRadius: 15,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default ActiveTrip;
