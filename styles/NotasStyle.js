import { StyleSheet } from 'react-native';
import colors from '../styles/Colors';

const css = StyleSheet.create({
  gradient: {
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
  cardNote: {
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 4
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
  listaNotas: {
    marginLeft: 0,
    marginRight: 0
  },
  noData: {
    textAlign: 'center',
    paddingTop: 20
  },
  note: {
    backgroundColor: colors.blanco
  },
  dateNote: {
    color: colors.azulClaro,
    fontSize: 12
  },
  textNote: {
    color: colors.casiNegro,
    fontSize: 12,
    textAlign: 'justify'
  },
  imageNote: {
    height: 200,
    width: null,
    flex: 1,
    marginLeft: -15,
    marginRight: -15
  },
  itemImage: {
    margin: 0,
    padding: 0
  },
  dateDiv: {
    marginBottom: 0,
    paddingBottom: 0
  },
  flexrow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  flexFull: {
    flex: 1
  },
  titleNewNote: {
    color: colors.azulClaro,
    fontWeight: 'bold',
    fontSize: 14
  },
  textInput: {
    borderWidth: 1,
    borderColor: colors.grisClaro,
    padding: 10,
    paddingTop: 10,
    height: 80,
    fontSize: 12
  },
  divBtns: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  btnNewNote: {
    marginTop: 10,
    backgroundColor: colors.azulClaro,
    paddingRight: 20,
    borderRadius: 4
  },
  textBtnNewNote: {
    color: colors.blanco,
    fontWeight: 'bold'
  },
  icnBlanco: {
    color: colors.blanco,
    marginLeft: 12,
    marginRight: 12
  }
});

export default css;
