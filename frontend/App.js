import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Testing, TestingButton } from './backendTesting';

export default function App() {
  return (
    <View style={styles.container}>
      <Testing />
      <StatusBar style="auto" />
      <TestingButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});