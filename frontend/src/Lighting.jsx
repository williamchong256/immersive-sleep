import * as React from 'react';
import {
  View, Switch,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Slider from '@react-native-community/slider';
import AsyncStorage from '@react-native-community/async-storage';
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { LightingTitle, Subheading } from './Themes';

function Lighting() {
  const [lightOn, setLightOn] = React.useState(false);
  const [lightIntensity, setLightIntensity] = React.useState(0);
  const [determineColor, setDetermineColor] = React.useState('None');
  const [lightColor, setLightColor] = React.useState(0);
  const [stringColor, setStringColor] = React.useState('#000000');

  React.useEffect(() => {
    (async () => {
      try {
        setLightOn(JSON.parse(await AsyncStorage.getItem('@lightOn')));
        setLightColor(JSON.parse(await AsyncStorage.getItem('@lightColor')));
        setLightIntensity(JSON.parse(await AsyncStorage.getItem('@lightIntensity')));
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  useFocusEffect(React.useCallback(() => {
    if (!lightOn) {
      setLightIntensity(0);
      setLightColor(0);
      setDetermineColor('None');
      setStringColor('#000000');
    } else if (lightColor <= 0.5) {
      setDetermineColor('Yellow');
      setStringColor('#ffd700');
    } else if (lightColor < 1.0) {
      setDetermineColor('Blue');
      setStringColor('#00bfff');
    } else if (lightColor < 1.5) {
      setDetermineColor('Pink');
      setStringColor('#ff69b4');
    } else if (lightColor < 2.0) {
      setDetermineColor('Red');
      setStringColor('#b22222');
    } else if (lightColor < 2.5) {
      setDetermineColor('Green');
      setStringColor('#008000');
    } else {
      setDetermineColor('Purple');
      setStringColor('#9400d3');
    }
  }, [lightOn, lightColor]));

  useFocusEffect(React.useCallback(() => (() => {
    (async () => {
      try {
        await AsyncStorage.setItem('@lightOn', JSON.stringify(lightOn));
        await AsyncStorage.setItem('@lightIntensity', JSON.stringify(lightIntensity));
        await AsyncStorage.setItem('@lightColor', JSON.stringify(lightColor));
      } catch (e) {
        console.log(e);
      }
    })();
  }), [lightOn, lightColor, lightIntensity]));

  return (
    <LinearGradient
      colors={['#F9F6FF', '#CFDFF7']}
      style={{
        flex: 1,
        padding: 15,
        alignItems: 'center',
      }}
    >
      <View style={{
        flexDirection: 'row',
        marginBottom: 30,
        marginTop: 10,
        justifyContent: 'center',
      }}
      >
        <LightingTitle>Lighting</LightingTitle>
        <Switch
          onValueChange={(value) => setLightOn(value)}
          value={lightOn}
          style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }] }}
        />
      </View>
      <Subheading>
        {`Intensity of Light: ${Math.round(lightIntensity)}%`}
      </Subheading>
      <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 20 }}>
        <Entypo name="light-down" size={24} color="black" />
        <Slider
          minimumValue={0}
          maximumValue={100}
          disabled={!lightOn}
          value={lightIntensity}
          onValueChange={(value) => setLightIntensity(value)}
          style={{
            width: 200,
            height: 25,
            marginRight: 10,
            marginLeft: 10,
            marginBottom: 15,
          }}
          minimumTrackTintColor="white"
        />
        <Entypo name="light-up" size={24} color="black" />
      </View>
      <Subheading>
        {` Light Color: ${determineColor}`}
      </Subheading>
      <Slider
        minimumValue={0}
        maximumValue={3}
        disabled={!lightOn}
        value={lightColor}
        onValueChange={(value) => setLightColor(value)}
        style={{ width: 200, height: 50, marginBottom: 15 }}
        minimumTrackTintColor="white"
      />
      <View
        style={{
          width: 115,
          height: 115,
          borderRadius: 115 / 2,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 100 / 2,
            backgroundColor: stringColor,
          }}
        />
      </View>
    </LinearGradient>
  );
}

export default Lighting;
