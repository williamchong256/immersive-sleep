import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  darkMode: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  darkModeToggleView: {
    flex: 1,
    alignItems: 'flex-end',
  },

  darkModeText: {
    flex: 1,
    paddingLeft: 7,
    marginTop: 8,
    fontSize: 20,
  },

  commentsBox: {
    flex: 1,
    padding: 10,
    paddingTop: 5,
    borderRadius: 5,
    opacity: 0.5,
    marginLeft: 5,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },

});

export default styles;
