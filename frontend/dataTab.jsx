import * as React from 'react';
import {
  View, SafeAreaView, FlatList, Pressable,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './style';
import DetailedData from './detailedData';
import { sampleData } from './sampleData.json';
import { CardTitle, BodyText } from './Themes';

// Handles the rendering of each item in data of FlatList
function renderData({ item }, navigation) {
  return (
    <View style={styles.scroll}>
      {/*
            Passing the item prop to our Detailed Data component
            when we call navigate
            */}
      <Pressable onPress={() => navigation.navigate('DetailedData', {
        item,
      })}
      >
        <CardTitle>{item.key}</CardTitle>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <BodyText>
            Duration:
            {item.duration}
          </BodyText>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <BodyText>
            Heart Rate:
            {item.heartRate}
          </BodyText>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <BodyText>
            Breathing:
            {item.breathing}
          </BodyText>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <BodyText>
            Efficiency:
            {item.efficiency}
          </BodyText>
        </View>
      </Pressable>
    </View>
  );
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
