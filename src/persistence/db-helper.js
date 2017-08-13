import { AsyncStorage } from 'react-native';

export async function ClearItems() {
  await AsyncStorage.clear();
}

export async function GetItem(key) {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.log(error);
  }
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
