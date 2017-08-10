import { AsyncStorage } from 'react-native';

export async function GetItem(key) {
  return await AsyncStorage.getItem(key);
}

export async function RemoveItem(key) {
  await AsyncStorage.removeItem(key);
}

export async function SetItem(key, value) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log('There was an error saving the value', error);
  }
}
