import React, { Component } from 'react';
import { Button, Clipboard, Text, View } from 'react-native';

import { FluidCard, FluidHeader, FluidButton } from '../components';

class NewTrip extends Component {
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
    return (
      <View>
        <FluidButton
          alignSelf="stretch"
          backgroundColor="#DFDFDF"
          color="#000"
          onPress={() => this.copyID(this.state.id)}>
          {this.state.id}
        </FluidButton>
        <Text style={styles.textStyle}>Tap that to copy.</Text>
        <Text style={styles.textStyle}>Head on over to your inbox.</Text>
        <Text style={styles.textStyle}>
          Forward your ticket to reservations@skyborne.co with the copied ID as
          the subject line.
        </Text>
        <FluidButton
          alignSelf="center"
          backgroundColor="#4BDE8B"
          color="#fff"
          onPress={this.fetchResults}>
          Done
        </FluidButton>
        <Text style={styles.textStyle}>Hit done when done!</Text>
        {this.props.children}
      </View>
    );
  }
}

const styles = {
  textStyle: {
    fontFamily: 'Rubik',
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 15,
  },
};

export default NewTrip;
