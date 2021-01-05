import * as React from 'react';
import {
  FlatList, Pressable,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import DetailedData from './detailedData';
import { sampleData } from './sampleData.json';
import {
  BodyText, CardTitle, CardView, DataView, DataScrollView, DataScrollViewWithPadding,
  PageTitle,
} from './Themes';

// Handles the rendering of each item in data of FlatList
function renderData({ item }, navigation) {
  return (
    <CardView>
      {/*
            Passing the item prop to our Detailed Data component
            when we call navigate
            */}
      <Pressable onPress={() => navigation.navigate('DetailedData', {
        item,
      })}
      >
        <CardTitle>{item.key}</CardTitle>

        <DataView>
          <BodyText>
            Duration:
            {item.duration}
          </BodyText>
        </DataView>

        <DataView>
          <BodyText>
            Heart Rate:
            {item.heartRate}
          </BodyText>
        </DataView>

        <DataView>
          <BodyText>
            Breathing:
            {item.breathing}
          </BodyText>
        </DataView>

        <DataView>
          <BodyText>
            Efficiency:
            {item.efficiency}
          </BodyText>
        </DataView>
      </Pressable>
    </CardView>
  );
}

// The Data tab where the FlatList is returned
function Data({ navigation }) {
  return (
  /* Due to a bug, iOS doesn't respect padding in SafeAreaView,
  so the extra view child (DataScrollViewWithPadding) is required to
  add the correct amount of padding */
    <DataScrollView>
      <DataScrollViewWithPadding>
        {/*
              Pass the navigation prop to renderData so that
              we can navigate to the Detailed Data page
              */}
        <PageTitle>Data</PageTitle>
        <FlatList
          data={sampleData}
          renderItem={(item) => renderData(item, navigation)}
          showsVerticalScrollIndicator={false}
        />
      </DataScrollViewWithPadding>
    </DataScrollView>
  );
}

const DataStack = createStackNavigator();

function DataTab() {
  return (
  // Implement a StackNavigator for the Detailed Data page
    <DataStack.Navigator initialRouteName="Data">
      <DataStack.Screen name="Data" component={Data} options={{ headerShown: false }} />
      <DataStack.Screen name="DetailedData" component={DetailedData} options={{ headerShown: false }} />
    </DataStack.Navigator>
  );
}

export default DataTab;
