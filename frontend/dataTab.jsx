import * as React from 'react';
import {
  FlatList, Pressable,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import DetailedData from './detailedData';
import { sampleData } from './sampleData.json';
import {
  BodyText, CardTitle, CardView, DataPointView, DataScrollView,
  PageTitle,
} from './Themes';

// Handles the rendering of each item in data of FlatList
function renderData({ item }, navigation) {
  return (
    <CardView data>
      {/*
            Passing the item prop to our Detailed Data component
            when we call navigate
            */}
      <Pressable onPress={() => navigation.navigate('DetailedData', {
        item,
      })}
      >
        <CardTitle data>{item.key}</CardTitle>

        <DataPointView>
          <BodyText>
            {`Duration: ${item.duration}`}
          </BodyText>
        </DataPointView>

        <DataPointView>
          <BodyText>
            {`Heart Rate: ${item.heartRate}`}
          </BodyText>
        </DataPointView>

        <DataPointView>
          <BodyText>
            {`Breathing: ${item.breathing}`}
          </BodyText>
        </DataPointView>

        <DataPointView>
          <BodyText>
            {`Efficiency: ${item.efficiency}`}
          </BodyText>
        </DataPointView>
      </Pressable>
    </CardView>
  );
}

// The Data tab where the FlatList is returned
function Data({ navigation }) {
  return (
    <DataScrollView>
      {/*
            Pass the navigation prop to renderData so that
            we can navigate to the Detailed Data page
            */}
      <PageTitle data>Data</PageTitle>
      <FlatList
        data={sampleData}
        renderItem={(item) => renderData(item, navigation)}
        showsVerticalScrollIndicator={false}
        inverted="true"
      />
    </DataScrollView>
  );
}

const DataStack = createStackNavigator();

function DataTab() {
  return (
  // Implement a StackNavigator for the Detailed Data page
    <DataStack.Navigator initialRouteName="Data">
      <DataStack.Screen name="Data" component={Data} options={{ headerShown: false }} />
      <DataStack.Screen name="DetailedData" component={DetailedData} />
    </DataStack.Navigator>
  );
}

export default DataTab;
