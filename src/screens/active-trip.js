import React, { Component } from 'react';
import { Alert, Button, Clipboard, Text, View } from 'react-native';

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
    Alert.alert('Copied ID!'); // Debatable
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
    return (
      <View>
        <FluidHeader>Active Trip</FluidHeader>
        <FluidCard style={styles.buttonStyle}>
          <FluidButton
            alignSelf="stretch"
            backgroundColor="#DFDFDF"
            color="#000"
            onPress={() => this.copyID(this.state.id)}>
            {this.state.id}
          </FluidButton>
          <Text>Tap that to copy.</Text>
          <Text>Head on over to your inbox.</Text>
          <Text>
            Forward your ticket to reservations@skyborne.co with the copied ID
            as the subject line.
          </Text>
          <FluidButton
            alignSelf="center"
            backgroundColor="#4BDE8B"
            color="#fff"
            onPress={this.fetchResults}>
            Done
          </FluidButton>
          <Text>Hit done when done!</Text>
        </FluidCard>
      </View>
    );
  }
}

const styles = {
  buttonStyle: {
    borderWidth: 1,
    padding: 5,
  },
};

export default ActiveTrip;
