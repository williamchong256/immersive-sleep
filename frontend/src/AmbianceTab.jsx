import * as React from 'react';
import {
  Text, Pressable,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import {
  BoilerplateView, CardView, PageTitle, PageView, CardTitle,
} from './Themes';
import Lighting from './Lighting';

function Ambiance({ navigation }) {
  return (
    <PageView center>
      <PageTitle>Ambiance</PageTitle>
      <CardView>
        <Pressable onPress={() => navigation.navigate('Music')} title="Music">
          <LinearGradient colors={['#F9F6FF', '#CFDFF7']} style={{ padding: 20, paddingTop: 0, borderRadius: 10 }}>
            <CardTitle>Music</CardTitle>
          </LinearGradient>
        </Pressable>
      </CardView>
      <CardView>
        <Pressable onPress={() => navigation.navigate('Lighting')} title="Lighting">
          <LinearGradient colors={['#F9F6FF', '#CFDFF7']} style={{ padding: 20, paddingTop: 0, borderRadius: 10 }}>
            <CardTitle>Lighting</CardTitle>
          </LinearGradient>
        </Pressable>
      </CardView>
    </PageView>
  );
}

function Music() {
  return (
    <BoilerplateView>
      <Text>Boilerplate for Music</Text>
    </BoilerplateView>
  );
}

const AmbianceStack = createStackNavigator();

function AmbianceTab() {
  return (
    <AmbianceStack.Navigator initialRouteName="Ambiance">
      <AmbianceStack.Screen name="Ambiance" component={Ambiance} options={{ headerShown: false }} />
      <AmbianceStack.Screen name="Music" component={Music} />
      <AmbianceStack.Screen name="Lighting" component={Lighting} />
    </AmbianceStack.Navigator>
  );
}

export default AmbianceTab;
