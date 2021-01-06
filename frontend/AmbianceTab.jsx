import * as React from 'react';
import {
  View, Text,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './style';
import { PageTitle, PressableButton, SettingsView } from './Themes';

function Ambiance({ navigation }) {
  return (
    <SettingsView>
      <PageTitle>Ambiance</PageTitle>
      <PressableButton onPress={() => navigation.navigate('Music')} title="Music" />
      <PressableButton onPress={() => navigation.navigate('Lighting')} title="Lighting" />
    </SettingsView>
  );
}

function Music() {
  return (
    <View style={styles.container}>
      <Text>Boilerplate for Music</Text>
    </View>
  );
}

function Lighting() {
  return (
    <View style={styles.container}>
      <Text>Boilerplate for Lighting</Text>
    </View>
  );
}

const AmbianceStack = createStackNavigator();

function AmbianceTab() {
  return (
    <AmbianceStack.Navigator initialRouteName="Ambiance" screenOptions={{ headerTransparent: true }}>
      <AmbianceStack.Screen name="Ambiance" component={Ambiance} options={{ headerShown: false }} />
      <AmbianceStack.Screen name="Music" component={Music} />
      <AmbianceStack.Screen name="Lighting" component={Lighting} />
    </AmbianceStack.Navigator>
  );
}

export default AmbianceTab;
