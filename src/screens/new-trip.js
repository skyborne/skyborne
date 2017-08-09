import React, { Component } from 'react';
import {
  Linking,
  Button,
  Clipboard,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import Device from 'react-native-device-info';

import { FluidCard, FluidHeader, FluidButton } from '../components';

import { width, height } from '../global';

import Icon from '../resources/icon';

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

  fetchResults = async () => {
    let response = await fetch(
      'http://localhost:8000/v1/results?id=' + this.state.id,
    );
    let results = await response.json();

    return results;
  };

  openMailApp = () => {
    const url = 'message://';
    Linking.canOpenURL(url)
      .then(supported => {
        if (!supported) {
          console.log("Can't handle url: " + url);
        } else {
          return Linking.openURL(url);
        }
      })
      .catch(err => console.log('An error occured', err));
  };

  flipAndLoad = () => {
    this.fetchResults()
      .then(results => this.setState({ results: results }))
      .catch(reason => console.log(reason.message));
    // Maybe charge them here.
    // Flip
    do {
      // Animate
    } while (Object.keys(this.state.results).length === 0);
  };

  devicePlus = () =>
    <View style={{ borderWidth: 0, flex: 0 }}>
      <FluidButton
        style={styles.idStyle}
        alignSelf="center"
        onPress={() => this.copyID(this.state.id)}>
        {this.state.id}
      </FluidButton>

      <Icon
        name="Up-Chevron"
        size={15}
        color="#2B2B2B"
        style={[{ textAlign: 'center' }, { marginTop: height * 0.7 * 0.03 }]}
      />

      <Text style={[styles.textStyle, { marginTop: height * 0.7 * 0.02 }]}>
        Tap that to copy.
      </Text>

      <FluidButton
        alignSelf="center"
        style={[{ marginTop: height * 0.7 * 0.05 }]}
        onPress={this.openMailApp}>
        Go to your mailbox
      </FluidButton>

      <Text style={[styles.textStyle, { marginTop: height * 0.7 * 0.05 }]}>
        Forward your ticket to
      </Text>
      <Text style={[styles.textStyle, styles.emailStyle]}>
        reservations@skyborne.co
      </Text>
      <Text style={styles.textStyle}>
        {'with the copied ID as\nthe subject line.'}
      </Text>

      <Text style={[styles.textStyle, { marginTop: height * 0.7 * 0.04 }]}>
        {'Come back and hit next\nwhen ready'}.
      </Text>
    </View>;

  deviceStd = () =>
    <View style={{ borderWidth: 0, flex: 1 }}>
      <FluidButton
        style={styles.idStyle}
        alignSelf="center"
        onPress={() => this.copyID(this.state.id)}>
        {this.state.id}
      </FluidButton>

      <Icon
        name="Up-Chevron"
        size={15}
        color="#2B2B2B"
        style={[{ textAlign: 'center' }, { marginTop: height * 0.7 * 0.03 }]}
      />

      <Text style={[styles.textStyle, { marginTop: height * 0.7 * 0.02 }]}>
        Tap that to copy.
      </Text>

      <FluidButton
        alignSelf="center"
        style={[{ marginTop: height * 0.7 * 0.05 }]}
        onPress={this.openMailApp}>
        Go to your mailbox
      </FluidButton>

      <Text style={[styles.textStyle, { marginTop: height * 0.7 * 0.05 }]}>
        Forward your ticket to
      </Text>
      <Text style={[styles.textStyle, styles.emailStyle]}>
        reservations@skyborne.co
      </Text>
      <Text style={styles.textStyle}>
        {'with the copied ID as\nthe subject line.'}
      </Text>

      <Text style={[styles.textStyle, { marginTop: height * 0.7 * 0.03 }]}>
        {'Come back and hit next\nwhen ready'}.
      </Text>
    </View>;

  deviceSmall = () =>
    <View>
      <FluidButton
        style={styles.idStyle}
        textStyle={{ fontSize: 12 }}
        alignSelf="center"
        onPress={() => this.copyID(this.state.id)}>
        {this.state.id}
      </FluidButton>

      <Icon
        name="Up-Chevron"
        size={15}
        color="#2B2B2B"
        style={[{ textAlign: 'center' }, { marginTop: height * 0.7 * 0.03 }]}
      />

      <Text style={[styles.smallTextStyle, { marginTop: height * 0.7 * 0.02 }]}>
        Tap that to copy.
      </Text>

      <FluidButton
        alignSelf="center"
        style={[{ marginTop: height * 0.7 * 0.04 }]}
        onPress={this.openMailApp}>
        Go to your mailbox
      </FluidButton>

      <Text style={[styles.smallTextStyle, { marginTop: height * 0.7 * 0.04 }]}>
        Forward your ticket to
      </Text>
      <Text style={[styles.smallTextStyle, styles.emailStyle]}>
        reservations@skyborne.co
      </Text>
      <Text style={styles.smallTextStyle}>
        {'with the copied ID as\nthe subject line.'}
      </Text>

      <Text style={[styles.smallTextStyle, { marginTop: height * 0.7 * 0.03 }]}>
        {'Come back and hit next\nwhen ready'}.
      </Text>
    </View>;

  isPlus = () => {
    const PLUS = Device.getModel().indexOf('Plus') >= 0;

    return PLUS ? true : false;
  };

  isStd = () => {
    const SIX = Device.getModel().indexOf('6') >= 0;
    const SEVEN = Device.getModel().indexOf('7') >= 0;

    return SIX || SEVEN ? true : false;
  };

  isSmall = () => {
    const SE = Device.getModel().indexOf('SE') >= 0;
    const FIVE = Device.getModel().indexOf('5') >= 0;

    return SE || FIVE ? true : false;
  };

  render() {
    if (this.isPlus()) {
      return this.devicePlus();
    } else if (this.isStd()) {
      return this.deviceStd();
    } else if (this.isSmall()) {
      return this.deviceSmall();
    }
    return this.devicePlus();
  }
}

const styles = {
  textStyle: {
    fontFamily: 'Rubik',
    fontSize: 18,
    fontWeight: '300',
    textAlign: 'center',
  },

  smallTextStyle: {
    fontFamily: 'Rubik',
    fontSize: 16,
    fontWeight: '300',
    textAlign: 'center',
  },

  idStyle: {
    shadowOpacity: 0,
    backgroundColor: '#E8E8E8',
    borderRadius: 20,
  },

  emailStyle: {
    color: '#8C8C8C',
  },
};

export default NewTrip;
