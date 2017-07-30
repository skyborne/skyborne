import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

import { Header } from '../components';

class ActiveTrip extends Component {
  state = { id: 0, results: {} };

  constructor(props) {
    super(props);
  }

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
        <Header>Active Trip</Header>
        <Text>
          {this.state.id === 0 ? '' : this.state.id}
        </Text>
        <View style={styles.buttonStyle}>
          <Button
            onPress={this.fetchID}
            title="Generate ID"
            color={this.state.id === 0 ? '#007aff' : '#' + this.state.id}
          />
          <Button onPress={this.fetchResults} title="Done" color="#007aff" />
          <Text>
            {' '}{JSON.stringify(this.state.results)}{' '}
          </Text>
          <Text> Head on over to your mail app </Text>
        </View>
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
