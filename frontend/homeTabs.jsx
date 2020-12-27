// This file holds the various component functions that are
// rendered when their corresponding Tab.Screen routes App.js
// are navigated to (except for the Settings Screen)

import * as React from 'react';
import {
  Button, View, Text, Dimensions,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './style';
import { sampleData } from './sampleData.json';
import { PageTitle, PageView } from './Themes';

const today = new Date();
const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

export function Start() {
  return (
    <LinearGradient colors={['#fff', '#F9F6FF', '#CFDFF7']} style={styles.data}>
      <PageTitle start>{time}</PageTitle>
    </LinearGradient>
  );
}

export function DiagnosticsTab() {
  const daysOfTheWeek = sampleData.map((user) => user.key);
  const heartRateDiagnostics = sampleData.map((user) => user.heartRate);

  return (
    <View style={styles.container}>
      <Text>Heart Rate Analysis</Text>
      <LineChart
        data={{ labels: daysOfTheWeek, datasets: [{ data: heartRateDiagnostics }] }}
        height={200}
        width={Dimensions.get('window').width - 60}
        fromZero
        withShadow={false}
        chartConfig={{
          backgroundGradientFrom: '#39B7CD',
          backgroundGradientTo: '#39B7CD',
          color: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
        }}
      />
    </View>
  );
}

export function HomeTab({ navigation }) {
  return (
    <PageView>
      <PageTitle home>Hello, Person</PageTitle>
      {/*
            The Home tab contains a Button titled "Start"
            that navigates to the Start Screen. Because the
            corresponding route is a Stack.Screen in the parent
            Navigator (in App.js), the bottom tab bar is not displayed
            */}
      <Button onPress={() => navigation.navigate('Start')} title="Start" style={{ alignSelf: 'flex-end' }} />
    </PageView>
  );
}

export function AmbianceTab() {
  return (
    <View style={styles.container}>
      <Text>Boilerplate for AmbianceTab</Text>
    </View>
  );
}
