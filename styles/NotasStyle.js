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
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 4,
    flexDirection: 'column'
  },
  cardItem: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    margin: 0
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
    paddingTop: 20,
    backgroundColor: colors.transparente
  },
  note: {
    backgroundColor: colors.blanco
  },
  dateNote: {
    color: colors.azulClaro,
    fontSize: 12,
    paddingBottom: 8
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
    fontSize: 14,
    lineHeight: 20
  },
  divBtns: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  divPhotoBtns: {
    flexDirection: 'row'
  },
  btnNewNote: {
    marginTop: 10,
    backgroundColor: colors.azulClaro,
    borderRadius: 4
  },
  btnNewNoteDisabled: {
    marginTop: 10,
    backgroundColor: colors.grisClaro,
    borderRadius: 4
  },
  textBtnNewNote: {
    paddingRight: 20,
    color: colors.blanco,
    fontWeight: 'bold'
  },
  icnBlanco: {
    color: colors.blanco,
    marginLeft: 12,
    marginRight: 12
  },
  container: {
    flex: 1
  },
  thumbnail: {
    width: 45,
    height: 45,
    marginTop: 10
  },
  btnErasePhoto: {
    fontSize: 24,
    color: colors.blanco,
    position: 'absolute',
    marginTop: 20,
    marginLeft: 13,
    backgroundColor: 'transparent'
  },
  btnConfirm: {
    marginTop: 12,
    backgroundColor: 'red',
    width: 45,
    height: 41,
    justifyContent: 'center',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  }
});

export default css;
