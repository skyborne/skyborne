import { Dimensions } from 'react-native';
import Device from 'react-native-device-info';

export const { height, width } = Dimensions.get('window');

export const isSmall = () => {
  const SE = Device.getModel().indexOf('SE') >= 0;
  const FIVE = Device.getModel().indexOf('5') >= 0;

  return SE || FIVE;
};
