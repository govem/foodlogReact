import { StyleSheet } from 'react-native';
import colors from '../styles/Colors';

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.naranjo
  },
  card: {
    padding: 10,
    borderRadius: 4,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 10,
    marginRight: 10,
    zIndex: 10,
    flex: 0
  },
  cardItem: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingTop: 0
  },
  divInput: {
    flexDirection: 'row'
  },
  inputSearch: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopColor: colors.casiBlanco,
    borderBottomColor: colors.casiBlanco,
    borderLeftColor: colors.casiBlanco,
    borderRightColor: colors.casiBlanco,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 10,
    borderRadius: 4,
    height: 45
  },
  searchButton: {
    width: 50,
    paddingRight: 0,
    justifyContent: 'center',
    backgroundColor: colors.azulClaro
  },
  searchButtonIcon: {
    fontSize: 32,
    color: colors.blanco
  },
  resultList: {
    backgroundColor: colors.blanco,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 0,
    paddingTop: 0,
    flex: 1,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  errorDiv: {
    margin: 20,
    backgroundColor: 'transparent'
  },
  errorText: {
    backgroundColor: 'transparent',
    color: colors.casiNegro,
    textAlign: 'center'
  },
  spinner: {
    height: 45
  }
});

export default css;
