import { StyleSheet } from 'react-native';
import colors from '../styles/Colors';

const css = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  friendList: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 4,
    padding: 0,
    backgroundColor: colors.blanco
  },
  divFriend: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  divGris: {
    backgroundColor: colors.casiBlanco
  },
  divSelected: {
    backgroundColor: colors.azulClaro
  },
  friendImage: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  friendName: {
    fontSize: 18,
    paddingLeft: 10,
    flex: 1
  },
  iconSelected: {
    paddingRight: 10,
    color: colors.azulClaro
  }
});

export default css;
