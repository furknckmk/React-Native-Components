import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#eaeaea',
    alignContent: 'space-between',
  },
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 6,
    borderColor: '#20232a',
    borderWidth: 1.2,
    marginBottom: 20,
  },
  title: {
    paddingVertical: 8,
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  text: {marginTop: -3, marginBottom: 8, fontSize: 16, color: 'black'},
  body: {alignItems: 'flex-start', paddingLeft: 12},

  button: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#08C2FF',
    borderBottomLeftRadius: 5.3,
    borderBottomRightRadius: 5.3,
  },
  button_text: {color: 'white'},
});
