import * as React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import {
  DiagnosticsTab, HomeTab, AmbianceTab, Start,
} from './homeTabs';
import SettingsTab from './settingsTab';
import DataTab from './dataTab';

// Implements the bottom tab navigation
// Tab icons are implemented in the tabBarIcon option in the TabNavigator,
// but could just as easily be implemented in each individual TabScreen
function HomeTabs() {
  return (
    // The route to "Home" is rendered on first load of the navigator
    // The screenOptions options in the Navigator sets the default options for
    // each of the child Screens
    // This function is passed down to each individual Screen, which then passes
    // its route prop to this function
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          // Switch statements that assigns icon based on TabScreen name
          switch (route.name) {
            case 'Diagnostics':
              return <MaterialCommunityIcons name="hospital" size={size} color={color} />;
            case 'Data':
              return <MaterialCommunityIcons name="waveform" size={size} color={color} />;
            case 'Home':
              return <Ionicons name="ios-globe-outline" size={size} color={color} />;
            case 'Ambiance':
              return <FontAwesome5 name="lightbulb" size={size} color={color} />;
            case 'Settings':
              return <Ionicons name="settings-outline" size={size} color={color} />;
            default:
              return <Text>error</Text>;
          }
        },
      })}
    >
      {/* The different tabs routes are declared here as Screens */}
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
      {/*
        The Tab Navigator is nested inside the Stack Navigator so that
        the "Start" Screen does not display the bottom tab bar when
        navigated to

        For more information: https://reactnavigation.org/docs/hiding-tabbar-in-screens
      */}
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Home" component={HomeTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
