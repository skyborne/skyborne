import React from 'react';
import { View, Button } from 'react-native';
import { Header } from '../components';

const ActiveTrip = () => (

    <View>
        <Header>Active Trip</Header>
        <View style={ styles.buttonStyle }>
            <Button
                onPress={ onPress }
                title='Button'
                color='#007aff'
            />
        </View>
    </View>

);

const onPress = () => {
  return fetch('http://localhost:8000/v1/keygen')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.id);
      })
      .catch((error) => {
        console.error(error);
      });
};

const styles = {
    buttonStyle: {
        borderWidth: 1,
        padding: 5
    }
};

export default ActiveTrip;
