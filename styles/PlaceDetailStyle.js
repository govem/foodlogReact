import { StyleSheet } from 'react-native';
import colors from './Colors';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blanco
  },
  imgStyle: {
    height: 230,
    width: '100%',
    maxWidth: '100%',
    padding: 10
  },
  floatingPanel: {
    height: 70,
    position: 'absolute',
    width: '100%',
    borderRadius: 4,
    backgroundColor: colors.blancoTransparente,
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingTop: 6,
    shadowColor: colors.negro,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5
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
  botonera: {
    backgroundColor: colors.blanco,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 5,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    height: 50
  },
  btn: {
    paddingTop: 0,
    paddingBottom: 0
  },
  btnIcon: {
    color: colors.azulClaro,
    fontSize: 28
  },
  visitTitle: {
    color: colors.naranjo,
    marginRight: 12,
    fontSize: 16,
    paddingLeft: 20,
    paddingBottom: 4
  },
  divListaVisitas: {
    flex: 1,
    backgroundColor: colors.blanco
  },
  listaVisitas: {
    backgroundColor: colors.blanco
  },
  itemFecha: {
    textAlign: 'center',
    fontSize: 12,
    paddingTop: 5,
    paddingBottom: 5,
    color: colors.azulClaro
  },
  divItemVisita: {
    borderTopColor: colors.naranjo,
    borderTopWidth: 1,
    paddingLeft: 0,
    paddingRight: 0
  },
  itemPlato: {
    paddingLeft: 20,
    paddingRight: 20,
    height: 24,
    alignItems: 'center',
    flexDirection: 'row'
  },
  itemPlatoGris: {
    paddingLeft: 20,
    paddingRight: 20,
    height: 24,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.casiBlanco
  },
  platoTitle: {
    flex: 1,
    fontSize: 12,
    color: colors.casiNegro
  },
  noDataDiv: {
    paddingTop: 40,
    paddingBottom: 40
  },
  noData: {
    textAlign: 'center',
    color: colors.casiNegro
  }
});

export default style;
