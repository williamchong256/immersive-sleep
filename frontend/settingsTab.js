import * as React from 'react';
import { Button, View, Text, Switch } from 'react-native';
import { styles } from './style';
import { createStackNavigator } from '@react-navigation/stack';

function Settings({ navigation }) {
    const [ darkMode, setDarkMode ] = React.useState(false);

    return (
        <View style={[styles.settings, {
            backgroundColor: darkMode ? '#000' : '#fff',
        }]}>
            <Button onPress={() => navigation.navigate('Profile')} title='Profile' />
            <Button onPress={() => navigation.navigate('Preferences')} title='Preferences' />
            <View style={styles.darkMode}>
                <Text style={[styles.darkModeText, {
                    color: darkMode ? '#fff' : '#000'
                }]}>Dark Mode</Text>
                <View style={styles.darkModeToggleView}>
                    <Switch onChange={() => setDarkMode(!darkMode)} value={darkMode} />
                </View>
            </View>
            <Button onPress={() => navigation.navigate('Notifications')} title='Notifications' />
            <Button onPress={() => navigation.navigate('Time Zone')} title='Time Zone' />
        </View>
    );
}


function Profile() {
    return (
        <View style={styles.container}>
            <Text>Boilerplate for Profile</Text>
        </View>
    );
}

function Preferences() {
    return (
        <View style={styles.container}>
            <Text>Boilerplate for Preferences</Text>
        </View>
    );
}

function Notifications() {
    return (
        <View style={styles.container}>
            <Text>Boilerplate for Notifications</Text>
        </View>
    );
}

function TimeZone() {
    return (
        <View style={styles.container}>
            <Text>Boilerplate for TimeZone</Text>
        </View>
    );
}

const SettingsStack = createStackNavigator();

function SettingsTab() {
    return (
        <SettingsStack.Navigator initialRouteName="Settings">
            <SettingsStack.Screen name="Settings" component={Settings} />
            <SettingsStack.Screen name="Preferences" component={Preferences} />
            <SettingsStack.Screen name="Profile" component={Profile} />
            <SettingsStack.Screen name="Notifications" component={Notifications} />
            <SettingsStack.Screen name="Time Zone" component={TimeZone} />
        </SettingsStack.Navigator>
    );
}

export default SettingsTab;