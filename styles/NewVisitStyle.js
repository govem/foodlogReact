import { StyleSheet } from 'react-native';
import colors from '../styles/Colors';

const css = StyleSheet.create({
  gradient: {
    flexDirection: 'column',
    flex: 1
  },
  floatingPanel: {
    borderRadius: 4,
    backgroundColor: colors.blanco,
    marginTop: 0,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingTop: 6,
    shadowColor: colors.negro,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5
  },
  floatingPanelHeader: {
    height: 70
  },
  floatingPanelSearch: {
    height: 150
  },
  floatingPanelList: {
    flex: 1,
    paddingRight: 0,
    paddingLeft: 0
  },
  divFinalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 0,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.azulOscuro
  },
  itemAddress: {
    color: colors.casiNegro
  },
  itemTime: {
    color: colors.casiNegro
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
    borderRadius: 4,
    height: 35
  },
  divStars: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  starButton: {
    fontSize: 38,
    color: colors.azulClaro
  },
  divButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  btn: {
    borderRadius: 4,
    paddingLeft: 20,
    paddingRight: 20,
    height: 36
  },
  btnAzul: {
    backgroundColor: colors.azulClaro
  },
  btnGris: {
    backgroundColor: colors.grisClaro
  },
  btnFull: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5
  },
  btnText: {
    color: colors.blanco,
    textAlign: 'center'
  },
  btnTextFull: {
    flex: 1,
    color: colors.blanco,
    textAlign: 'center'
  },
  titleGris: {
    color: colors.grisClaro,
    fontSize: 12,
    width: '100%',
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5
  },
  noData: {
    textAlign: 'center',
    paddingTop: 20
  },
  divPlato: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    paddingRight: 10,
    paddingLeft: 10
  },
  divPlatoGris: {
    flexDirection: 'row',
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    backgroundColor: colors.casiBlanco
  },
  plato: {
    flex: 1
  }
});

export default css;
