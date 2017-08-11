import { AsyncStorage } from 'react-native';

export async function GetItem(key) {
  try {
    item = await AsyncStorage.getItem(key);

    return item;
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
