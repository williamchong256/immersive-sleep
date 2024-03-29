import * as React from 'react';
import {
  Button, Switch, Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import {
  PreferencesView, CardTitle,
} from '../Themes';

function Preferences() {
  const [darkMode, setDarkMode] = React.useState(false);
  const [Alarm, setAlarm] = React.useState(true);
  const [twelveHour, setTwelveHour] = React.useState(true);
  const [alarmTime, setAlarmTime] = React.useState(new Date());
  const [show, setShow] = React.useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || alarmTime;
    setShow(Platform.OS === 'ios');
    setAlarmTime(currentDate);
  };

  React.useEffect(() => {
    (async () => {
      try {
        setDarkMode(JSON.parse(await AsyncStorage.getItem('@darkMode')));
        setAlarm(JSON.parse(await AsyncStorage.getItem('@Alarm')));
        setTwelveHour(JSON.parse(await AsyncStorage.getItem('@twelveHour')));
        setAlarmTime(new Date(JSON.parse(await AsyncStorage.getItem('@alarmTime'))));
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  useFocusEffect(React.useCallback(() => (() => {
    (async () => {
      try {
        await AsyncStorage.setItem('@darkMode', JSON.stringify(darkMode));
        await AsyncStorage.setItem('@Alarm', JSON.stringify(Alarm));
        await AsyncStorage.setItem('@twelveHour', JSON.stringify(twelveHour));
        await AsyncStorage.setItem('@alarmTime', JSON.stringify(alarmTime));
      } catch (e) {
        console.log(e);
      }
    })();
  }), [darkMode, Alarm, twelveHour, alarmTime]));

  return (
    <LinearGradient colors={['#F9F6FF', '#CFDFF7']} style={{ flex: 1, padding: 20 }}>
      <PreferencesView>
        <CardTitle>Dark Mode</CardTitle>
        <Switch
          onChange={() => setDarkMode(!darkMode)}
          value={darkMode}
        />
      </PreferencesView>
      <PreferencesView>
        <CardTitle>Alarm</CardTitle>
        <Button onPress={setShow} title="Set Alarm" />
        <Switch
          onChange={() => setAlarm(!Alarm)}
          value={Alarm}
        />
      </PreferencesView>
      <PreferencesView>
        <CardTitle>12hr/24hr</CardTitle>
        <Switch
          onChange={() => setTwelveHour(!twelveHour)}
          value={twelveHour}
        />
      </PreferencesView>
      {show && (
        <RNDateTimePicker
          value={alarmTime}
          is24Hour={twelveHour}
          mode="time"
          onChange={onChange}
        />
      )}
    </LinearGradient>
  );
}

export default Preferences;
