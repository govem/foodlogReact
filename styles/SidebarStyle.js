import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  sidebar: {
    backgroundColor: 'rgba(0,0,0,0.9)',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40
  },
  foto: {},
  nombre: {
    color: '#fff',
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
    color: '#fff',
    fontSize: 12,
    marginBottom: 8
  }
});

export default styles;
