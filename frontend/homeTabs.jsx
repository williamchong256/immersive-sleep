// This file holds the various component functions that are
// rendered when their corresponding Tab.Screen routes App.js
// are navigated to (except for the Settings Screen)

import * as React from 'react';
import {
  Dimensions,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import styles from './style';
import { sampleData } from './sampleData.json';
import {
  BodyText, PageTitle, PageView, CardTitle, CardView,
} from './Themes';

export function Start() {
  const initialToday = new Date();
  const [time, setTime] = React.useState(`${initialToday.toTimeString().split(' ')[0]}`);

  React.useEffect(() => {
    const timer = setInterval(() => {
      const today = new Date();
      setTime(`${today.toTimeString().split(' ')[0]}`);
    }, 100);
    return () => clearInterval(timer);
  });

  return (
    <LinearGradient colors={['#fff', '#F9F6FF', '#CFDFF7']} style={styles.start}>
      <CardTitle center>Begin Sleep Session</CardTitle>
      <PageTitle center>{time}</PageTitle>
    </LinearGradient>
  );
}

export function DiagnosticsTab() {
  const daysOfTheWeek = sampleData.map((user) => user.key);
  const heartRateDiagnostics = sampleData.map((user) => user.heartRate);

  return (
    <PageView>
      <PageTitle>Diagnostics</PageTitle>
      <BodyText>Heart Rate Analysis</BodyText>
      <LineChart
        data={{ labels: daysOfTheWeek, datasets: [{ data: heartRateDiagnostics }] }}
        height={200}
        width={Dimensions.get('window').width - 60}
        fromZero
        withShadow={false}
        chartConfig={{
          backgroundGradientFrom: '#A6CDF0',
          backgroundGradientTo: '#CFDFF7',
          color: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
        }}
      />
    </PageView>
  );
}

export function HomeTab({ navigation }) {
  return (
    <PageView center>
      <PageTitle>Hello, Person</PageTitle>
      {/*
            The Home tab contains a Button titled "Start"
            that navigates to the Start Screen. Because the
            corresponding route is a Stack.Screen in the parent
            Navigator (in App.js), the bottom tab bar is not displayed
            */}
      <CardView>
        <CardTitle>Last Night,</CardTitle>
      </CardView>
      <Feather.Button
        name="moon"
        color="#000"
        backgroundColor="#fff"
        onPress={() => navigation.navigate('Start')}
        size={50}
      />
    </PageView>
  );
}

export function AmbianceTab() {
  return (
    <PageView center>
      <PageTitle>Ambiance</PageTitle>
    </PageView>
  );
}
