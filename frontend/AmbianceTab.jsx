import * as React from 'react';
import {
  View, Text, Pressable, Switch,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Slider from '@react-native-community/slider';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './style';
import {
  CardView, PageTitle, PageView, CardTitle,
} from './Themes';

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
    <View style={styles.container}>
      <Text>Boilerplate for Music</Text>
    </View>
  );
}

function Lighting() {
  const [lightOn, setLightOn] = React.useState(false);
  const [initialSlider, setSlider] = React.useState(0);
  const [initialLightColor, setLightColor] = React.useState(0);
  let determineColor = 'No Color';
  let stringForInitialColor = '#ffd700';
  let stringForFinalColor = '#00bfff';
  let noLightIntensity = initialSlider;
  if ((initialLightColor).toFixed(1) <= 0.5) { determineColor = 'Yellow'; stringForInitialColor = '#ffd700'; stringForFinalColor = '#ffd700'; }
  if ((initialLightColor).toFixed(1) < 1.0 && (initialLightColor).toFixed(1) > 0.5) { determineColor = 'Blue'; stringForInitialColor = '#00bfff'; stringForFinalColor = '#00bfff'; }
  if ((initialLightColor).toFixed(1) < 1.5 && (initialLightColor).toFixed(1) >= 1.0) { determineColor = 'Pink'; stringForInitialColor = '#ff69b4'; stringForFinalColor = '#ff69b4'; }
  if ((initialLightColor).toFixed(1) < 2.0 && (initialLightColor).toFixed(1) >= 1.5) { determineColor = 'Red'; stringForInitialColor = '#b22222'; stringForFinalColor = '#b22222'; }
  if ((initialLightColor).toFixed(1) < 2.5 && (initialLightColor).toFixed(1) >= 2.0) { determineColor = 'Green'; stringForInitialColor = '#008000'; stringForFinalColor = '#008000'; }
  if ((initialLightColor).toFixed(1) <= 3.0 && (initialLightColor).toFixed(1) >= 2.5) { determineColor = 'Purple'; stringForInitialColor = '#9400d3'; stringForFinalColor = '#9400d3'; }
  if (lightOn === false) { determineColor = 'None'; stringForInitialColor = '#000000'; stringForFinalColor = '#000000'; noLightIntensity = 0; }
  return (
    <View style={styles.container}>
      <Text>
        Turn Light On
        {'\n'}
        {'\n'}
      </Text>
      <Switch
        trackColor={{ false: '00FF00', true: 'FFFFFF' }}
        onValueChange={(value) => setLightOn(value)}
        value={lightOn}
        style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }] }}
      />
      <Text>
        {'\n'}
        {'\n'}
        {'\n'}
        {' '}
        Intensity of Light:
        {' '}
        {Math.round(noLightIntensity)}
      </Text>
      <Slider
        minimumValue={0}
        maximumValue={3}
        value={initialSlider}
        onValueChange={(value) => setSlider(value)}
        style={{ width: 160, height: 50 }}
        onSlidingComplete={(value) => setSlider(value)}
        minimumTrackTintColor="#ffd700"
        maximumTrackTintColor="#fafad2"
      />
      <Text> </Text>
      <Text>
        {' '}
        Light Color:
        {' '}
        {determineColor}
      </Text>
      <Slider
        minimumValue={0}
        maximumValue={3}
        value={initialLightColor}
        onValueChange={(value) => setLightColor(value)}
        style={{ width: 160, height: 50 }}
        onSlidingComplete={(value) => setLightColor(value)}
        minimumTrackTintColor={stringForInitialColor}
        maximumTrackTintColor={stringForFinalColor}
      />
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
