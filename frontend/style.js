import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
    fontSize: 17,
  },

  scroll: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'stretch',
    justifyContent: 'center',
  }
});