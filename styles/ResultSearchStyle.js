import { StyleSheet } from 'react-native';
import colors from '../styles/Colors';

const css = StyleSheet.create({
  cellResult: {
    padding: 12,
    flexDirection: 'row'
  },
  cellResultGris: {
    padding: 12,
    flexDirection: 'row',
    backgroundColor: colors.casiBlanco
  },
  cellImage: {
    width: 52,
    height: 52,
    borderRadius: 4
  },
  cellTextZone: {
    flex: 1,
    paddingLeft: 12,
    paddingRight: 12
  },
  cellTitle: {
    color: colors.azulClaro,
    fontSize: 14
  },
  cellText: {
    color: colors.casiNegro,
    fontSize: 12
  },
  btnAdd: {
    backgroundColor: colors.azulClaro,
    borderRadius: 4,
    width: 52,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageHolder: {
    width: 52,
    height: 52,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  holderGris: {
    backgroundColor: colors.casiBlanco
  },
  holderBlanco: {
    backgroundColor: colors.blanco
  },
  imageTextHolder: {
    textAlign: 'center',
    fontSize: 36
  }
});

export default css;
