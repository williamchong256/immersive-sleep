import * as React from 'react';
import {
  FlatList, Pressable,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';
import * as SQLite from 'expo-sqlite';
import {
  BodyText, CardTitle, CardView, DataPointView, DataScrollView,
  PageTitle,
} from './Themes';
import DetailedData from './detailedData';

const { manifest } = Constants;

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
            Duration:
            {` ${item.duration}`}
          </BodyText>
        </DataPointView>

        <DataPointView>
          <BodyText>
            Heart Rate:
            {` ${item.heartRate}`}
          </BodyText>
        </DataPointView>

        <DataPointView>
          <BodyText>
            Breathing:
            {` ${item.breathing}`}
          </BodyText>
        </DataPointView>

        <DataPointView>
          <BodyText>
            Efficiency:
            {` ${item.efficiency}`}
          </BodyText>
        </DataPointView>
      </Pressable>
    </CardView>
  );
}

// The Data tab where the FlatList is returned
function Data({ navigation }) {
  const [sampleData, setSampleData] = React.useState({});

  const db = SQLite.openDatabase('data.db');

  React.useEffect(() => {
    db.transaction((tx) => tx.executeSql('SELECT * FROM data', [], (_, { rows }) => {
      // eslint-disable-next-line no-underscore-dangle
      const data = rows._array;
      setSampleData(data);
    }, () => {
      const apiURL = `http://${manifest.debuggerHost.split(':').shift()}:4000/data`;
      fetch(apiURL, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }).then((res) => res.json())
        .then((json) => {
          const data = json.sampleData;
          tx.executeSql(
            'CREATE TABLE IF NOT EXISTS data (key string primary key NOT NULL, duration int, heartRate int, breathing string, efficiency int)',
          );
          data.forEach((element) => {
            const values = [element.key,
              element.duration,
              element.heartRate,
              element.breathing,
              element.efficiency,
            ];
            tx.executeSql('INSERT INTO data VALUES (?, ?, ?, ?, ?)', values);
          });
          setSampleData(data);
        })
        .catch((err) => console.log(err));
    }), (err) => console.log(err));
  }, []);

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
