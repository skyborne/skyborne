import React, { Component } from 'react';
import { Button, Clipboard, Text, TouchableOpacity, View } from 'react-native';

import { FluidCard, FluidHeader, FluidButton } from '../components';

import { height, width } from '../global';

class ActiveTrip extends Component {
  state = { id: '', results: {} };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.fetchID();
    console.log('height: ' + height + ' width: ' + width);
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

  // TODO: Disable card button, until animation is complete.
  // TODO: Flip card into the new trip view.
  // TODO: Figure out 'edit-trip'

  render() {
    return (
      <View>
        <FluidHeader>Ongoing</FluidHeader>
        <TouchableOpacity>
          <FluidCard height={height * 0.52}>
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
};

export default ActiveTrip;
