import * as React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';

function DetailedData({ route }) {
    // Retrieve our item in route.params
    const { item } = route.params;
    return (
        // Simple example of displaying data based in route
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
    );
}

export default DetailedData;