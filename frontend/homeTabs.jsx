// This file holds the various component functions that are
// rendered when their corresponding Tab.Screen routes App.js
// are navigated to (except for the Settings Screen)

import * as React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { sampleData } from './sampleData.json';
import {
  CardTitle, CardText, HomeCardData, HomeCardData2, HomeCardTitle, HomeCardView,
  PageTitle, PageView, StartView,
} from './Themes';

export function Start() {
  const [time, setTime] = React.useState(new Date().toTimeString().split(' ')[0]);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toTimeString().split(' ')[0]);
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
      <HomeCardView>
        <CardText>Last Night,</CardText>
        <HomeCardTitle center data>{`${Math.floor(latestData.duration / 60)}hrs ${latestData.duration % 60}min`}</HomeCardTitle>
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
      </HomeCardView>
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
