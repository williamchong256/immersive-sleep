import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  settings: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop: 80,
  },

  scroll: {
    flex: 1,
    backgroundColor: '#A6CDF0',
    padding: 20,
    paddingTop: 15,
    alignItems: 'stretch',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 7,
  },

  data: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },

  start: {
    flex: 1,
    padding: 20,
    paddingTop: 80,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },

  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'stretch',
    justifyContent: 'center',
  },

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
    marginBottom: 10,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },

  profile: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    alignItems: 'stretch',
  },

});

export default styles;
