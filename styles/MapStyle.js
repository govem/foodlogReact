import { StyleSheet } from 'react-native';

const css = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    top: 64,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    flex: 1,
    ...StyleSheet.absoluteFillObject
  }
});

export default css;
