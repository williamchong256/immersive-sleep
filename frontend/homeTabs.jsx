// This file holds the various component functions that are
// rendered when their corresponding Tab.Screen routes App.js
// are navigated to (except for the Settings Screen)

import * as React from 'react';
import { Button, View, Text, Dimensions } from 'react-native';
import { styles } from './style';
import { LineChart } from "react-native-chart-kit";
import { sampleData } from './sampleData.json';

export function Start() {
  return (
    <View style={styles.container}>
      <Text>Boilerplate for Start</Text>
    </View>
  );
}

export function DiagnosticsTab() {
    const daysOfTheWeek = sampleData.map(user => user.key);
    const heartRateDiagnostics = sampleData.map(user => user.heartRate);

    return (
        <View style={styles.container}>
            <Text>Heart Rate Analysis</Text>
            <LineChart 
            data = {{labels: daysOfTheWeek, datasets: [{ data: heartRateDiagnostics }]}}
            height= {200}
            width = {Dimensions.get("window").width-60}
            fromZero={true}
            withShadow={false}
            chartConfig={{
                backgroundGradientFrom: "#39B7CD", 
                backgroundGradientTo: "#39B7CD",
                color: (opacity=1) => `rgba(0,0,0, ${opacity})`
            }}
            />
        </View>
    );
}

export function HomeTab({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Boilerplate for HomeTab</Text>
      {/*
            The Home tab contains a Button titled "Start"
            that navigates to the Start Screen. Because the
            corresponding route is a Stack.Screen in the parent
            Navigator (in App.js), the bottom tab bar is not displayed
            */}
      <Button onPress={() => navigation.navigate('Start')} title="Start" />
    </View>
  );
}

export function AmbianceTab() {
  return (
    <View style={styles.container}>
      <Text>Boilerplate for AmbianceTab</Text>
    </View>
  );
}
