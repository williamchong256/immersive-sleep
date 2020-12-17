import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DiagnosticsTab, DataTab, HomeTab, AmbianceTab, Start } from './homeTabs';
import SettingsTab from './settingsTab';

function HomeTabs() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Diagnostics" component={DiagnosticsTab} />
      <Tab.Screen name="Data" component={DataTab} />
      <Tab.Screen name="Home" component={HomeTab} />
      <Tab.Screen name="Ambiance" component={AmbianceTab} />
      <Tab.Screen name="Settings" component={SettingsTab} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Home" component={HomeTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
