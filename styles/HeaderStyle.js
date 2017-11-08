import { StyleSheet } from 'react-native';

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
    backgroundColor: '#FDA63A'
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
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderWidth: 0
  },
  segmentTabText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  segmentActive: {
    backgroundColor: '#fff'
  },
  segmentActiveText: {
    color: '#FDA73B',
    fontWeight: 'bold'
  },
  searchIcon: {
    width: 30,
    marginLeft: 10,
    marginRight: 10,
    color: '#fff'
  },
  searchPanel: {
    flexDirection: 'row',
    height: 40,
    marginBottom: 10
  },
  itemInput: {
    flex: 1,
    backgroundColor: '#FFF',
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
    color: '#888'
  },
  cancelButton: {
    paddingTop: 0,
    paddingBottom: 0
  },
  cancelSearchText: {
    paddingLeft: 0,
    color: '#fff',
    paddingTop: 0,
    paddingBottom: 0
  }
});

export default styles;
