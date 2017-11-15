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
  foto: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginBottom: 10
  },
  nombre: {
    color: colors.blanco,
    fontSize: 16,
    fontFamily: 'PTSansBold',
    marginBottom: 20
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
