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
        console.log(error);
        return '';
      });


  render() {
    return (
      <View>
        <Header>Active Trip</Header>
        <Text>
          {this.state.id == 0 ? '' : this.state.id}
        </Text>
        <View style={styles.buttonStyle}>
          <Button
            onPress={this.onPress}
            title="Generate ID"
            color={this.state.id == 0 ? '#007aff' : '#' + this.state.id}
          />
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
