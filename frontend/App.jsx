import * as React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import Amplify, { Auth } from 'aws-amplify';
import { AWSIoTProvider } from '@aws-amplify/pubsub';
import AWSAppSyncClient from 'aws-appsync';
import config from './src/aws-exports';
import HomeTab from './src/homeTabs';
import Start from './src/startTab';
import DiagnosticsTab from './src/diagnosticsTab';
import SettingsTab from './src/settingsTab';
import DataTab from './src/dataTab';
import AmbianceTab from './src/AmbianceTab';
import { ContextProvider } from './src/Context';

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

const client = new AWSAppSyncClient({
  url: config.aws_appsync_graphqlEndpoint,
  region: config.aws_appsync_region,
  auth: {
    type: config.aws_appsync_authenticationType,
    jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken(),
  },
});

Amplify.addPluggable(new AWSIoTProvider({
  aws_pubsub_region: 'us-west-2',
  aws_pubsub_endpoint: 'wss://ar73xdknl1gxe-ats.iot.us-west-2.amazonaws.com/mqtt',
}));

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
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      }}
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
    <ContextProvider value={client}>
      <NavigationContainer>
        {/*
        The Tab Navigator is nested inside the Stack Navigator so that
        the "Start" Screen does not display the bottom tab bar when
        navigated to

        For more information: https://reactnavigation.org/docs/hiding-tabbar-in-screens
      */}
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Start" component={Start} options={{ headerTransparent: true }} />
          <Stack.Screen name="Home" component={HomeTabs} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
}

export default App;
