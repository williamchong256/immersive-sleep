// Holds the various components reached from the Settings tab

import * as React from 'react';
import {
  View, Text, Switch,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './style';
import {
  DetailedSettingsView, PageTitle, PressableButton, SettingsView,
} from './Themes';

// TODO: Implement Dark Mode at an app level

// The component for the initial landing page for Settings
function Settings({ navigation }) {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
  // Returns a View containing Buttons that navigate to
  // the various Screens in the SettingsStack
    <SettingsView>
      <PageTitle>Settings</PageTitle>
      <PressableButton onPress={() => navigation.navigate('Profile')} title="Profile" />
      <PressableButton onPress={() => navigation.navigate('Preferences')} title="Preferences" />
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
          <Switch
            onChange={() => setDarkMode(!darkMode)}
            value={darkMode}
            style={{ marginTop: 8 }}
          />
        </View>
      </View>
      <PressableButton onPress={() => navigation.navigate('Notifications')} title="Notifications" />
      <PressableButton onPress={() => navigation.navigate('Time Zone')} title="Time Zone" />
    </SettingsView>
  );
}

function Profile() {
  return (
    <DetailedSettingsView>
      <Text>Boilerplate for Profile</Text>
    </DetailedSettingsView>
  );
}

function Preferences() {
  return (
    <DetailedSettingsView>
      <Text>Boilerplate for Preferences</Text>
    </DetailedSettingsView>
  );
}

function Notifications() {
  return (
    <DetailedSettingsView>
      <Text>Boilerplate for Notifications</Text>
    </DetailedSettingsView>
  );
}

function TimeZone() {
  return (
    <DetailedSettingsView>
      <Text>Boilerplate for TimeZone</Text>
    </DetailedSettingsView>
  );
}

const SettingsStack = createStackNavigator();

function SettingsTab() {
  return (
  // Implement a StackNavigator for the various settings
    <SettingsStack.Navigator initialRouteName="Settings" screenOptions={{ headerTransparent: true }}>
      <SettingsStack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
      <SettingsStack.Screen name="Preferences" component={Preferences} />
      <SettingsStack.Screen name="Profile" component={Profile} />
      <SettingsStack.Screen name="Notifications" component={Notifications} />
      <SettingsStack.Screen name="Time Zone" component={TimeZone} />
    </SettingsStack.Navigator>
  );
}

export default SettingsTab;
