import React, { Component } from 'react';
import { Linking, Clipboard, Text, View } from 'react-native';

import Device from 'react-native-device-info';

import { FluidButton } from '../components';
import { SetItem, GetItem } from '../persistence/db-helper';
import Icon from '../resources/icon';

import { height } from '../global';

class NewTrip extends Component {
  state = { id: '' };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.fetchID();
    GetItem('ID').then(id => this.setState({ id: id }));
  }

  copyID = id => {
    Clipboard.setString(id);
  };

  fetchID = () => {
    fetch('http://localhost:8000/v1/keygen')
      .then(response => response.json())
      .then(responseJSON => {
        SetItem('ID', responseJSON.id);
      })
      .catch(error => {
        console.log('Failed to fetch response.', error);
      });
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

  devicePlus = () =>
    <View style={{ borderWidth: 0, flex: 0, justifyContent: 'flex-start' }}>
      <View style={{ borderWidth: 0 }}>
        <FluidButton
          style={styles.idStyle}
          alignSelf="center"
          onPress={() => this.copyID(this.state.id)}>
          {this.state.id}
        </FluidButton>

        <Icon
          name="Up-Chevron"
          size={14}
          color="#2B2B2B"
          style={[
            {
              textAlign: 'center',
              marginTop: height * 0.7 * 0.02,
              marginBottom: height * 0.7 * 0.02,
            },
          ]}
        />

        <Text style={[styles.textStyle]}>Tap that to copy.</Text>
      </View>

      <FluidButton
        alignSelf="center"
        style={{
          marginTop: height * 0.7 * 0.04,
          marginBottom: height * 0.7 * 0.04,
        }}
        onPress={this.openMailApp}>
        Go to your mailbox
      </FluidButton>

      <View style={{ borderWidth: 0 }}>
        <Text style={[styles.textStyle]}>Forward your ticket to</Text>
        <Text style={[styles.textStyle, styles.emailStyle]}>
          reservations@skyborne.co
        </Text>
        <Text style={styles.textStyle}>
          {'with the copied ID as\nthe subject line.'}
        </Text>
      </View>

      <Text style={[styles.textStyle, { marginTop: height * 0.7 * 0.05 }]}>
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

  adjustFontSize() {
    if (() => this.isSmall()) return 16;
    else return 18;
  }

  render() {
    let size = this.adjustFontSize();
    const styles = {
      textStyle: {
        fontFamily: 'Rubik',
        fontSize: size,
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

    return (
      <View style={{ top: 5, borderWidth: 0, flex: 0, justifyContent: 'flex-start' }}>
        <View style={{ borderWidth: 0 }}>
          <FluidButton
            style={styles.idStyle}
            alignSelf="center"
            onPress={() => this.copyID(this.state.id)}>
            {this.state.id}
          </FluidButton>

          <Icon
            name="Up-Chevron"
            size={14}
            color="#2B2B2B"
            style={[
              {
                textAlign: 'center',
                marginTop: height * 0.7 * 0.02,
                marginBottom: height * 0.7 * 0.02,
              },
            ]}
          />

          <Text style={[styles.textStyle]}>Tap that to copy.</Text>
        </View>

        <FluidButton
          alignSelf="center"
          style={{
            marginTop: height * 0.7 * 0.04,
            marginBottom: height * 0.7 * 0.04,
          }}
          onPress={this.openMailApp}>
          Go to your mailbox
        </FluidButton>

        <View style={{ borderWidth: 0 }}>
          <Text style={[styles.textStyle]}>Forward your ticket to</Text>
          <Text style={[styles.textStyle, styles.emailStyle]}>
            reservations@skyborne.co
          </Text>
          <Text style={styles.textStyle}>
            {'with the copied ID as\nthe subject line.'}
          </Text>
        </View>

        <Text style={[styles.textStyle, { marginTop: height * 0.7 * 0.03 }]}>
          {'Come back and hit next\nwhen ready'}.
        </Text>
      </View>
    );
  }
}

export default NewTrip;
