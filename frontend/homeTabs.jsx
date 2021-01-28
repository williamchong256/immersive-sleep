// This file holds the various component functions that are
// rendered when their corresponding Tab.Screen routes App.js
// are navigated to (except for the Settings Screen)

import * as React from 'react';
import { Feather } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import { sampleData } from './sampleData.json';
import {
  CardText, HomeCardData, HomeCardData2, HomeCardTitle, HomeCardView,
  PageTitle, PageView,
} from './Themes';

export default function HomeTab({ navigation }) {
  const latestData = sampleData[0];
  const [user, setUser] = React.useState(false);

  useFocusEffect(React.useCallback(() => {
    Auth.currentAuthenticatedUser()
      .then(({ attributes }) => setUser(attributes))
      .catch(() => setUser(false));
  }, []));

  return (
    <PageView center>
      <PageTitle>{`Hello, ${user ? user.name : 'Person'}`}</PageTitle>
      {/*
            The Home tab contains a Button titled "Start"
            that navigates to the Start Screen. Because the
            corresponding route is a Stack.Screen in the parent
            Navigator (in App.js), the bottom tab bar is not displayed
            */}
      <HomeCardView>
        <CardText>Last Night,</CardText>
        <HomeCardTitle center data>{`${Math.floor(latestData.duration / 60)}hrs ${latestData.duration % 60}min`}</HomeCardTitle>
        <HomeCardData>
          <HomeCardData2>
            <Feather name="heart" size={24} color="black" />
            <CardText left>{`${latestData.heartRate} bpm`}</CardText>
          </HomeCardData2>
          <HomeCardData2>
            <Feather name="bar-chart-2" size={24} color="black" />
            <CardText left>{`${latestData.breathing} cpm`}</CardText>
          </HomeCardData2>
        </HomeCardData>
      </HomeCardView>
      <Feather.Button
        name="moon"
        color="black"
        backgroundColor="white"
        onPress={() => navigation.navigate('Start')}
        size={50}
        iconStyle={{ marginRight: 0 }}
      />
    </PageView>
  );
}
