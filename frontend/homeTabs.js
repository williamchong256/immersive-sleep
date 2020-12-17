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