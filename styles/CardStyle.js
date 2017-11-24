import { StyleSheet } from 'react-native';
import colors from './Colors';

const styles = StyleSheet.create({
  cell: {
    padding: 5,
    borderRadius: 8,
    marginTop: 5,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    zIndex: 10
  },
  cellCardItem: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingTop: 0
  },
  cellImage: {
    borderRadius: 4,
    width: 80,
    height: 80
  },
  cellTextZone: {
    flex: 1,
    marginLeft: 10,
    flexDirection: 'column'
  },
  cellTitle: {
    color: colors.casiNegro,
    fontSize: 16,
    fontFamily: 'PTSansBold'
  },
  cellText: {
    color: colors.grisClaro,
    fontSize: 14
  },
  cellTextHL: {
    color: colors.azulClaro,
    fontSize: 14,
    marginTop: 13,
    fontFamily: 'PTSansBold'
  },
  visitedList: {
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 2
  },
  visitedListMasDatos: {
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 0
  },
  filaVisitas: {
    flexDirection: 'row',
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: colors.blanco
  },
  filaVisitasGris: {
    flexDirection: 'row',
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: colors.casiBlanco
  },
  filaMasDatos: {
    backgroundColor: colors.blanco,
    paddingTop: 4,
    paddingBottom: 4,
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 2,
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4
  },
  textoMasDatos: {
    flex: 1,
    textAlign: 'center',
    fontSize: 12,
    color: colors.azulClaro
  },
  filaFecha: {
    fontSize: 12,
    width: 85,
    color: colors.casiNegro
  },
  filaTexto: {
    fontSize: 12,
    flex: 1,
    color: colors.casiNegro
  },
  filaNota: {
    flexDirection: 'row',
    flex: 0.5
  },
  ultimaFila: {
    overflow: 'hidden',
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4
  }
});

export default styles;
