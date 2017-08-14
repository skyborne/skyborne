import React, { Component } from 'react';
import { Linking, Clipboard, Text, View } from 'react-native';

import { FluidButton } from '../components';
import { SetItem, GetItem, ClearItems } from '../persistence/db-helper';
import Icon from '../resources/icon';

import { height, isSmall } from '../global';

class NewTrip extends Component {
  state = { id: '' };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.fetchID();
    console.log("mounted");
    ClearItems();
  }

  // componentWillUnmount() {
  //   ClearItems();
  // }

  copyID = id => {
    Clipboard.setString(id);
  };

  fetchID = () => {
    fetch('http://localhost:8000/v1/keygen')
      .then(response => response.json())
      .then(responseJSON => {
        SetItem('ID', responseJSON.id).then(
          GetItem('ID').then(id => this.setState({ id: id })),
        );
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
      .catch(err => console.log('An error occurred', err));
  };

  render() {
    const styles = {
      textStyle: {
        fontFamily: 'Rubik',
        fontSize: 18,
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

    if (isSmall()) {
      styles.textStyle.fontSize = 16;
    }

    return (
      <View
        style={{
          top: 5,
          borderWidth: 0,
          flex: 0,
          justifyContent: 'flex-start',
        }}>
        <View style={{ borderWidth: 0 }}>
          <FluidButton
            style={styles.idStyle}
            alignSelf="center"
            onPress={() => this.copyID(this.state.id)}
            textStyle={isSmall() ? { fontSize: 12 } : { fontSize: 14 }}>
            47575757575757575757
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
          onPress={this.openMailApp}
          textStyle={isSmall() ? { fontSize: 12 } : { fontSize: 14 }}>
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
