import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  backgroundsContainer: {
    position: 'absolute',
    height: height,
    width: width,
  },
  fadeContainer: {
    position: 'absolute',
    height: height,
    width: width,
  },
  backgroundImages: {
    position: 'absolute',
    height: height,
    width: width,
  },
});