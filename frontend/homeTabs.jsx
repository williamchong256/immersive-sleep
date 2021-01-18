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
import { sampleData } from './sampleData.json';
import {
  CardTitle, CardText, CardView, HomeCardData, HomeCardData2, HomeCardTitle, PageTitle, PageView,
  StartView,
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
    <StartView>
      <LinearGradient colors={['#F9F6FF', '#CFDFF7']} style={{ flex: 1, padding: 20, paddingTop: 80 }}>
        <CardTitle center>Begin Sleep Session</CardTitle>
        <PageTitle center>{time}</PageTitle>
      </LinearGradient>
    </StartView>
  );
}

export function DiagnosticsTab() {
  const daysOfTheWeek = sampleData.map((user) => user.key);
  const heartRateDiagnostics = sampleData.map((user) => user.heartRate);

  return (
    <PageView>
      <PageTitle>Diagnostics</PageTitle>
      <CardView>
        <LinearGradient colors={['#F9F6FF', '#CFDFF7']} style={{ padding: 20, paddingTop: 0, borderRadius: 10 }}>
          <CardTitle>Heart Rate Analysis</CardTitle>
          <LineChart
            data={{ labels: daysOfTheWeek, datasets: [{ data: heartRateDiagnostics }] }}
            height={200}
            width={Dimensions.get('window').width - 60}
            fromZero
            withShadow={false}
            chartConfig={{
              backgroundGradientFrom: '#A6CDF0',
              backgroundGradientTo: '#CFDFF7',
              color: () => 'rgba(0,0,0,1)',
            }}
            style={{ borderRadius: 10 }}
          />
        </LinearGradient>
      </CardView>
    </PageView>
  );
}

export function HomeTab({ navigation }) {
  const latestData = sampleData[sampleData.length - 1];
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
        <LinearGradient
          colors={['#F9F6FF', '#CFDFF7']}
          style={{
            padding: 20,
            paddingTop: 8,
            borderRadius: 10,
            aspectRatio: 5 / 5,
            justifyContent: 'space-between',
          }}
        >
          <CardText>Last Night,</CardText>
          <HomeCardTitle center data>{`${Math.floor(latestData.duration / 60)}hrs${latestData.duration % 60}min`}</HomeCardTitle>
          <HomeCardData>
            <HomeCardData2>
              <Feather name="heart" size={24} color="black" />
              <CardText left>{`${latestData.heartRate} bpm`}</CardText>
            </HomeCardData2>
            <HomeCardData2>
              <Feather name="bar-chart-2" size={24} color="black" />
              <CardText left>{`${latestData.breathing} cpm`}</CardText>
            </HomeCardData2>
          </HomeCardData>
        </LinearGradient>
      </CardView>
      <Feather.Button
        name="moon"
        color="black"
        backgroundColor="white"
        onPress={() => navigation.navigate('Start')}
        size={50}
        iconStyle={{ marginRight: 0 }}
      />
    </PageView>
  );
}
