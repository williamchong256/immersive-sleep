import * as React from 'react';
import { View, SafeAreaView, Text, FlatList } from 'react-native';
import { styles } from './style';

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

function header() {
    return (
        <Text style={{ alignSelf: 'center', padding: 10 }}>Header</Text>
    );
}

function renderData({ item }) {
    return (
        <View style={styles.scroll}>
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
        </View>
    )
}

function DataTab() {
    return (
        <SafeAreaView style={styles.scrollView}>
            <FlatList data={sampleData} renderItem={renderData} ListHeaderComponent={header}/>
        </SafeAreaView>
    );
}

export default DataTab;