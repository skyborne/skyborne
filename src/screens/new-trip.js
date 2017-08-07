import React, { Component } from 'react';
import { Linking, Button, Clipboard, Text, View, TouchableOpacity } from 'react-native';

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

  render() {
    return (
      <View>
        <View style={[{ flex: 1 }]}>
          <FluidButton
            style={{
              shadowOpacity: 0,
              backgroundColor: '#E8E8E8',
              borderRadius: 20,
            }}
            alignSelf="stretch"
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
            style={[styles.marginTop, { marginTop: height * 0.7 * 0.04 }]}
            onPress={this.openMailApp}>
            Go to your mailbox
          </FluidButton>

          <Text style={[styles.textStyle, { marginTop: height * 0.7 * 0.04 }]}>
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

          <TouchableOpacity>
            <Icon
              style={[{ marginTop: height * 0.7 * 0.05, textAlign: 'center' }]}
              name="Right-Chevron-Circle"
              size={30}
              color="#2B2B2B"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  textStyle: {
    fontFamily: 'Rubik',
    fontSize: 18,
    fontWeight: '300',
    textAlign: 'center',
  },

  marginBottom: {
    marginBottom: 15,
  },

  marginTop: {
    marginTop: 15,
  },

  emailStyle: {
    color: '#8C8C8C',
  },
};

export default NewTrip;
