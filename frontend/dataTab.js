import * as React from 'react';
import { View, SafeAreaView, Text, FlatList, Pressable } from 'react-native';
import { styles } from './style';
import { createStackNavigator } from '@react-navigation/stack';
import DetailedData from './detailedData';

// Sample data for displaying FlatList
const sampleData = [
    {
        key: '12/3',
        duration: 3600,
        heartRate: 65,
        breathing: 'yes',
        efficiency: 10,
    },
    {
        key: '12/4',
        duration: 4267,
        heartRate: 70,
        breathing: 'yes',
        efficiency: 6,
    },
    {
        key: '12/5',
        duration: 9243,
        heartRate: 0,
        breathing: 'no',
        efficiency: 0,
    },
    {
        key: '12/6',
        duration: 2434,
        heartRate: 60,
        breathing: 'yes',
        efficiency: 3,
    },
    {
        key: '12/7',
        duration: 4256,
        heartRate: 65,
        breathing: 'yes',
        efficiency: 4,
    },
    {
        key: '12/8',
        duration: 2432,
        heartRate: 71,
        breathing: 'yes',
        efficiency: 8,
    },
];

export {sampleData};

// Handles the rendering of each item in data of FlatList
function renderData({ item }, navigation) {
    return (
        <View style={styles.scroll}>
            {/*
            Passing the item prop to our Detailed Data component
            when we call navigate
            */}
            <Pressable onPress={() => navigation.navigate("DetailedData", {
                item
            })}>
                <Text style={{ alignSelf: 'center' }}>{item.key}</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ textAlign: 'left' }}>Duration:</Text>
                    <Text style={{ textAlign: 'right' }}>{item.duration}</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ textAlign: 'left' }}>Heart Rate:</Text>
                    <Text style={{ textAlign: 'right' }}>{item.heartRate}</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ textAlign: 'left' }}>Breathing:</Text>
                    <Text style={{ textAlign: 'right' }}>{item.breathing}</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ textAlign: 'left' }}>Efficiency:</Text>
                    <Text style={{ textAlign: 'right' }}>{item.efficiency}</Text>
                </View>
            </Pressable>
        </View>
    )
}

// The Data tab where the FlatList is returned
function Data({ navigation }) {
    return (
        <SafeAreaView style={styles.scrollView}>
            {/*
            Pass the navigation prop to renderData so that
            we can navigate to the Detailed Data page
            */}
            <FlatList data={sampleData} renderItem={(item) => renderData(item, navigation)} />
        </SafeAreaView>
    );
}

const DataStack = createStackNavigator();

function DataTab() {
    return (
        // Implement a StackNavigator for the Detailed Data page
        <DataStack.Navigator initialRouteName="Data">
            <DataStack.Screen name="Data" component={Data} />
            <DataStack.Screen name="DetailedData" component={DetailedData} />
        </DataStack.Navigator>
    );
}

export default DataTab;