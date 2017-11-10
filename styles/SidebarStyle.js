import { StyleSheet } from 'react-native';
import colors from './Colors';

const styles = StyleSheet.create({
  sidebar: {
    backgroundColor: colors.negroTransparente,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40
  },
  foto: {},
  nombre: {
    color: colors.blanco,
    fontSize: 16,
    fontFamily: 'PTSansBold'
  },
  listaMenu: {
    width: '100%'
  },
  mensajeBox: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  mensaje: {
    color: colors.blanco,
    fontSize: 12,
    marginBottom: 8
  }
});

export default styles;
