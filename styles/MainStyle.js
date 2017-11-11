import { StyleSheet } from 'react-native';
import colors from './Colors';

const styles = StyleSheet.create({
  placesList: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    flex: 1
  },

  container: {
    flex: 1
  },
  fabStyle: {
    backgroundColor: colors.azulClaro,
    color: colors.blanco
  }
});

export default styles;
