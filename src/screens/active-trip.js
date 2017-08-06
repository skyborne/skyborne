import React, { Component } from 'react';
import {
  Animated,
  Button,
  Clipboard,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { FluidCard, FluidHeader, FluidButton } from '../components';

import { height, width } from '../global';

class ActiveTrip extends Component {
  state = {
    id: '',
    results: {},
    fade: new Animated.Value(0),
    test_fade: new Animated.Value(0),
    displayNewTripView: false,
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.fetchID();
    this.fadeInit();
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

  // TODO: Blur Background, if at new trip stage
  // TODO: Disable card button, until animation is complete.
  // TODO: Ask for Transaction Info
  // TODO: Flip card into the new trip view.
  // TODO: Figure out 'edit-trip'
  // TODO: Save trip, figure out how to display if round trip

  fadeInit() {
    Animated.timing(this.state.fade, {
      toValue: 1,
      duration: 2000,
    }).start();
  }

  newTrip() {
    fadeInNewTrip = () => {
      Animated.timing(this.state.test_fade, {
        toValue: 1,
        duration: 250,
      }).start();
    };
    fadeOutNewTrip = () => {
      Animated.timing(this.state.test_fade, {
        toValue: 0,
        duration: 250,
      }).start(() => {
        this.setState({ displayNewTripView: false });
      });
    };
    fadeInNewTrip();
    return (
      <Animated.View
        style={[styles.centerView, { opacity: this.state.test_fade }]}>
        <FluidCard height={height * 0.7}>
          <Text style={styles.textStyle}>New trip view.</Text>
          <TouchableOpacity onPress={fadeOutNewTrip}>
            <Text style={styles.textStyle}>Close.</Text>
          </TouchableOpacity>
        </FluidCard>
      </Animated.View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FluidHeader>Ongoing</FluidHeader>
        <Animated.View style={{ opacity: this.state.fade }}>
          <TouchableOpacity
            onPress={() => {
              this.setState({ displayNewTripView: true });
            }}>
            <FluidCard height={height * 0.52}>
              <Text style={styles.textStyle}>Tap to add a new trip.</Text>
            </FluidCard>
          </TouchableOpacity>
        </Animated.View>
        {this.state.displayNewTripView ? this.newTrip() : null}
      </View>
    );
  }
}

const styles = {
  centerView: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  textStyle: {
    fontFamily: 'Rubik',
    fontSize: 18,
    fontWeight: '200',
    textAlign: 'center',
  },
};

export default ActiveTrip;
