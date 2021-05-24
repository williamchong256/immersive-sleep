import * as React from 'react';
import {
  FlatList, Pressable, TextInput, Button, View,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFocusEffect } from '@react-navigation/native';
import gql from 'graphql-tag';
import DetailedData from './detailedData';
import {
  BodyText, CardTitle, CardView, DataPointView, DataScrollView,
  PageTitle, Subheading,
} from './Themes';
import styles from './style';
import * as queries from './graphql/queries';
import * as mutations from './graphql/mutations';
import Context from './Context';

// Handles the rendering of each item in data of FlatList
function renderData({ item }, navigation) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const d = new Date(item.date);
  const dayName = days[d.getDay()];

  return (
    <CardView data>
      {/*
            Passing the item prop to our Detailed Data component
            when we call navigate
            */}
      <Pressable onPress={() => navigation.navigate('DetailedData', {
        id: item.id,
      })}
      >
        <CardTitle data>{dayName}</CardTitle>
        <Subheading profile>{item.date}</Subheading>
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
function DataDisplay({ navigation }) {
  const [sampleData, setSampleData] = React.useState([]);
  const [date, setDate] = React.useState('');
  const [duration, setDuration] = React.useState('');
  const [heartRate, setHeartRate] = React.useState('');
  const [breathing, setBreathing] = React.useState('');
  const [efficiency, setEfficiency] = React.useState('');

  const client = React.useContext(Context);

  useFocusEffect(React.useCallback(() => {
    (async () => {
      try {
        const days = await client.query({
          query: gql(queries.listDays),
        });
        const data = days.data.listDays.items;
        data.sort((a, b) => {
          if (a.date > b.date) return -1;
          return 1;
        });
        setSampleData(data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []));

  async function pushData() {
    try {
      const users = await client.query({
        query: gql(queries.listUsers),
      });
      const user = users.data.listUsers.items[0];
      const data = {
        date,
        duration,
        heartRate,
        breathing,
        efficiency,
        userID: user.id,
      };
      await client.mutate({
        mutation: gql(mutations.createDay),
        variables: {
          input: data,
        },
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <DataScrollView>
      {/*
            Pass the navigation prop to renderData so that
            we can navigate to the Detailed Data page
            */}
      <PageTitle data>Data</PageTitle>
      <View style={styles.container}>
        <TextInput
          onChangeText={(val) => setDate(val)}
          value={date}
          placeholder="Date"
        />
        <TextInput
          onChangeText={(val) => setDuration(val)}
          value={duration}
          placeholder="Duration"
        />
        <TextInput
          onChangeText={(val) => setHeartRate(val)}
          value={heartRate}
          placeholder="Heart Rate"
        />
        <TextInput
          onChangeText={(val) => setBreathing(val)}
          value={breathing}
          placeholder="Breathing"
        />
        <TextInput
          onChangeText={(val) => setEfficiency(val)}
          value={efficiency}
          placeholder="Efficiency"
        />
        <Button title="Create Data" onPress={pushData} />
      </View>
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
    <DataStack.Navigator initialRouteName="DataDisplay">
      <DataStack.Screen name="DataDisplay" component={DataDisplay} options={{ headerShown: false }} />
      <DataStack.Screen name="DetailedData" component={DetailedData} />
    </DataStack.Navigator>
  );
}

export default DataTab;
