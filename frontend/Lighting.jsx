import * as React from 'react';
import {
  View, Text, Switch,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Slider from '@react-native-community/slider';
import styles from './style';

function Lighting() {
  const [lightOn, setLightOn] = React.useState(false);
  const [lightIntensity, setLightIntensity] = React.useState(0);
  const [determineColor, setDetermineColor] = React.useState('None');
  const [lightColor, setLightColor] = React.useState(0);
  const [stringColor, setStringColor] = React.useState('#000000');

  useFocusEffect(React.useCallback(() => {
    const initialLightColor = lightColor.toFixed(1);
    if (!lightOn) {
      setLightIntensity(0);
      setLightColor(0);
      setDetermineColor('None');
      setStringColor('#000000');
    } else if (initialLightColor <= 0.5) {
      setDetermineColor('Yellow');
      setStringColor('#ffd700');
    } else if (initialLightColor < 1.0) {
      setDetermineColor('Blue');
      setStringColor('#00bfff');
    } else if (initialLightColor < 1.5) {
      setDetermineColor('Pink');
      setStringColor('#ff69b4');
    } else if (initialLightColor < 2.0) {
      setDetermineColor('Red');
      setStringColor('#b22222');
    } else if (initialLightColor < 2.5) {
      setDetermineColor('Green');
      setStringColor('#008000');
    } else {
      setDetermineColor('Purple');
      setStringColor('#9400d3');
    }
  }, [lightOn, lightColor]));

  return (
    <View style={styles.container}>
      <Text>
        {'Turn Light On\n\n'}
      </Text>
      <Switch
        trackColor={{ false: '00FF00', true: 'FFFFFF' }}
        onValueChange={(value) => setLightOn(value)}
        value={lightOn}
        style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }] }}
      />
      <Text>
        {`\n\n\n\nIntensity of Light: ${Math.round(lightIntensity)}`}
      </Text>
      <Slider
        minimumValue={0}
        maximumValue={3}
        disabled={!lightOn}
        value={lightIntensity}
        onValueChange={(value) => setLightIntensity(value)}
        style={{ width: 160, height: 50 }}
        minimumTrackTintColor="#ffd700"
        maximumTrackTintColor="#fafad2"
      />
      <Text>
        {` Light Color: ${determineColor}`}
      </Text>
      <Slider
        minimumValue={0}
        maximumValue={3}
        disabled={!lightOn}
        value={lightColor}
        onValueChange={(value) => setLightColor(value)}
        style={{ width: 160, height: 50 }}
        minimumTrackTintColor={stringColor}
        maximumTrackTintColor={stringColor}
      />
    </View>
  );
}

export default Lighting;
