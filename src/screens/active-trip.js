import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

import { Header } from '../components';

class ActiveTrip extends Component {
  state = { id: 0 };

  constructor(props) {
    super(props);

    this.onPress = this.onPress.bind(this);
  }

  onPress = () => {
    fetch('http://localhost:8000/v1/keygen')
      .then(response => response.text())
      .then(text => (text.length ? JSON.parse(text) : {}))
      .then(responseJSON => {
        this.setState({ id: responseJSON.id });
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <View>
        <Header>Active Trip</Header>
        <Text>
          {this.state.id}
        </Text>
        <View style={styles.buttonStyle}>
          <Button onPress={this.onPress} title="Button" color="#007aff" />
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
