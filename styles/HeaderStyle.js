import { StyleSheet } from 'react-native';
import colors from './Colors';

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: 'PTSansBold',
    alignSelf: 'center'
  },
  headerBody: {
    flex: 1,
    alignItems: 'center'
  },
  extendedViewHeader: {
    backgroundColor: colors.naranjo
  },
  segmentView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10
  },
  segment: {
    marginLeft: 10,
    flex: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  segmentTab: {
    height: 40,
    backgroundColor: colors.blancoTab,
    borderWidth: 0
  },
  segmentTabText: {
    color: colors.blanco,
    fontWeight: 'bold'
  },
  segmentActive: {
    backgroundColor: colors.blanco
  },
  segmentActiveText: {
    color: colors.naranjo,
    fontWeight: 'bold'
  },
  searchIcon: {
    width: 30,
    marginLeft: 10,
    marginRight: 10,
    color: colors.blanco
  },
  searchPanel: {
    flexDirection: 'row',
    height: 40,
    marginBottom: 10
  },
  itemInput: {
    flex: 1,
    backgroundColor: colors.blanco,
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 4,
    marginLeft: 10,
    marginRight: 10
  },
  inputSearch: {
    fontSize: 14,
    lineHeight: 18,
    marginLeft: 4,
    marginRight: 0,
    paddingRight: 0,
    height: 38
  },
  iconSearch: {
    marginRight: 4,
    paddingLeft: 10,
    color: colors.blanco
  },
  cancelButton: {
    paddingTop: 0,
    paddingBottom: 0
  },
  cancelSearchText: {
    paddingLeft: 0,
    color: colors.blanco,
    paddingTop: 0,
    paddingBottom: 0
  }
});

export default styles;
