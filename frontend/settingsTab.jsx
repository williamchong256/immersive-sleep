// Holds the various components reached from the Settings tab

import * as React from 'react';
import {
  Button, View, Text, Switch,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './style';

// TODO: Implement Dark Mode at an app level

// The component for the initial landing page for Settings
function Settings({ navigation }) {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
  // Returns a View containing Buttons that navigate to
  // the various Screens in the SettingsStack
    <View style={styles.settings}>
      <Button onPress={() => navigation.navigate('Profile')} title="Profile" />
      <Button onPress={() => navigation.navigate('Preferences')} title="Preferences" />
      {/*
            To display the Dark Mode toggle as shown in the figma, a Text
            component and a View component with a Switch component nested
            inside are further nested inside another View and are given
            specific styles. These styles can been inspected in the
            style.js file
            */}
      <View style={styles.darkMode}>
        <Text style={styles.darkModeText}>Dark Mode</Text>
        <View style={styles.darkModeToggleView}>
          <Switch onChange={() => setDarkMode(!darkMode)} value={darkMode} />
        </View>
      </View>
      <Button onPress={() => navigation.navigate('Notifications')} title="Notifications" />
      <Button onPress={() => navigation.navigate('Time Zone')} title="Time Zone" />
    </View>
  );
}

function Profile() {
  return (
    <View style={styles.container}>
      <Text>Boilerplate for Profile</Text>
    </View>
  );
}

function Preferences() {
  return (
    <View style={styles.container}>
      <Text>Boilerplate for Preferences</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={styles.container}>
      <Text>Boilerplate for Notifications</Text>
    </View>
  );
}

function TimeZone() {
  return (
    <View style={styles.container}>
      <Text>Boilerplate for TimeZone</Text>
    </View>
  );
}

const SettingsStack = createStackNavigator();

function SettingsTab() {
  return (
  // Implement a StackNavigator for the various settings
    <SettingsStack.Navigator initialRouteName="Settings">
      <SettingsStack.Screen name="Settings" component={Settings} />
      <SettingsStack.Screen name="Preferences" component={Preferences} />
      <SettingsStack.Screen name="Profile" component={Profile} />
      <SettingsStack.Screen name="Notifications" component={Notifications} />
      <SettingsStack.Screen name="Time Zone" component={TimeZone} />
    </SettingsStack.Navigator>
  );
}

export default SettingsTab;
