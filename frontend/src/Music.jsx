import * as React from 'react';
import {
  Dimensions, Switch, View,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';
import {
  AmbianceTitle,
} from './Themes';

function Music() {
  const [musicOn, setMusicOn] = React.useState(true);
  const [selectedSong, setSelectedSong] = React.useState();

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
        <AmbianceTitle>Music</AmbianceTitle>
        <Switch
          onValueChange={(value) => setMusicOn(value)}
          value={musicOn}
          style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }] }}
        />
      </View>
      { musicOn && (
        <Picker
          selectedValue={selectedSong}
          onValueChange={(itemValue) => setSelectedSong(itemValue)}
          style={{ width: Dimensions.get('window').width - 60 }}
          enabled={musicOn}
        >
          <Picker.Item label="Forest" value="forest" />
          <Picker.Item label="Rain" value="rain" />
          <Picker.Item label="River" value="river" />
          <Picker.Item label="Waves" value="waves" />
          <Picker.Item label="White Noise" value="whiteNoise" />
          <Picker.Item label="Wind" value="wind" />
        </Picker>
      )}
    </LinearGradient>
  );
}

export default Music;
