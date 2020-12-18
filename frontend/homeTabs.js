// This file holds the various component functions that are
// rendered when their corresponding Tab.Screen routes App.js
// are navigated to (except for the Settings Screen)

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { styles } from './style';

export function Start() {
  return (
    <View style={styles.container}>
        <Text>Boilerplate for Start</Text>
    </View>
  );
}

export function DiagnosticsTab() {
    return (
        <View style={styles.container}>
            <Text>Boilerplate for DiagnosticsTab</Text>
        </View>
    );
}

export function DataTab() {
    return (
        <View style={styles.container}>
            <Text>Boilerplate for DataTab</Text>
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
            <Button onPress={() => navigation.navigate('Start')} title='Start' />
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