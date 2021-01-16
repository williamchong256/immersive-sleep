import * as React from 'react';

import { LinearGradient } from 'expo-linear-gradient';

import {
  BodyText, DataView, DataPointView, PageTitle, Subheading,
} from './Themes';

function DetailedData({ navigation, route }) {
  // Retrieve our item in route.params
  const { item } = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: item.key,
    });
  }, [navigation]);

  return (
  // Simple example of displaying data based in route

    <DataView>
      <LinearGradient colors={['#F9F6FF', '#CFDFF7']} style={{ flex: 1, padding: 20 }}>
        <PageTitle>{item.key}</PageTitle>

        <DataPointView>
          <Subheading>{item.duration}</Subheading>
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
      </LinearGradient>
    </DataView>
  );
}

export default DetailedData;
