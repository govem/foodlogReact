import { StyleSheet } from 'react-native';
import colors from '../styles/Colors';

const css = StyleSheet.create({
  headerCamera: {
    backgroundColor: colors.negro,
    height: 75,
    flexDirection: 'row'
  },
  headerText: {
    color: colors.blanco,
    alignSelf: 'center'
  },
  camera: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: colors.negro
  },
  cameraLayer: {
    height: 70,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  cameraLayerLandscape: {
    height: '100%',
    paddingTop: 25,
    width: 70,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    alignSelf: 'flex-end'
  },
  btnCamera: {
    height: 60,
    width: 70,
    alignSelf: 'center'
  },
  btnCameraReverse: {
    height: 60,
    alignSelf: 'flex-end'
  },
  btnCameraClose: {
    height: 60,
    alignSelf: 'flex-start'
  },
  iconCamera: {
    fontSize: 48,
    width: 48,
    color: colors.blanco
  },
  iconReverseCamera: {
    fontSize: 32,
    color: colors.blanco
  }
});

export default css;
