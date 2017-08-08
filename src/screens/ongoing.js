import React, { Component } from 'react';
import {
  Animated,
  Button,
  Clipboard,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';

import { BlurView } from 'react-native-blur';

import { FluidCard, FluidHeader, FluidButton } from '../components';

import Icon from '../resources/icon';

import NewTrip from './new-trip';

import { height, width } from '../global';

class Ongoing extends Component {
  state = {
    id: '',
    results: {},
    fade: new Animated.Value(0),
    test_fade: new Animated.Value(0),
    displayNewTripView: false,
    blur: false,
    disabled: true,
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

  // TODO: Ask for Transaction Info
  // TODO: Flip card into the new trip view.
  // TODO: Figure out 'edit-trip'
  // TODO: Save trip, figure out how to display if round trip

  fadeInit() {
    Animated.timing(this.state.fade, {
      toValue: 1,
      duration: 2000,
    }).start(animation => {
      if (animation.finished) {
        this.setState({ disabled: false });
      }
    });
  }

  /*-------------*
        CARDS
  *--------------*/

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
        this.setState({
          displayNewTripView: false,
          blur: false,
          test_fade: new Animated.Value(0),
        });
      });
    };

    fadeInNewTrip();

    return (
      <Animated.View
        style={[styles.centerView, { opacity: this.state.test_fade }]}>
        <FluidCard
          height={height * 0.7}
          style={{
            borderWidth: 0,
          }}>
          <TouchableOpacity
            onPress={() => {
              fadeOutNewTrip();
            }}
            style={{
              alignSelf: 'flex-start',
            }}>
            <Icon
              name="X"
              size={15}
              color="#2B2B2B"
              style={{
                marginLeft: height * 0.7 * 0.04,
                marginTop: height * 0.7 * 0.04,
                marginBottom: height * 0.7 * 0.04,
              }}
            />
          </TouchableOpacity>
          <NewTrip />
        </FluidCard>
      </Animated.View>
    );
  }

  editTrip() {
    return;
  }

  itinerary() {
    return;
  }

  /*
    RENDER
  */

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FluidHeader>Ongoing</FluidHeader>
        <Animated.View
          style={{
            alignItems: 'center',
            opacity: this.state.fade,
          }}>
          <TouchableOpacity
            disabled={this.state.disabled}
            onPress={() => {
              this.setState({ displayNewTripView: true, blur: true });
            }}>
            <FluidCard
              height={height * 0.52}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.textStyle}>Tap to add a new trip.</Text>
            </FluidCard>
          </TouchableOpacity>
        </Animated.View>
        {this.state.blur
          ? <BlurView blurType="light" style={styles.absolute} />
          : null}
        {this.state.displayNewTripView ? this.newTrip() : null}
      </View>
    );
  }
}

const styles = {
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  initCard: {
    alignItems: 'center',
  },

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

export default Ongoing;
