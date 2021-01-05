import * as React from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import styles from './style';
import {
  PageTitle, BodyText, Subheading, DataView,
} from './Themes';

function DetailedData({ route }) {
  // Retrieve our item in route.params
  const { item } = route.params;
  return (
  // Simple example of displaying data based in route

    <LinearGradient colors={['#F9F6FF', '#CFDFF7']} style={styles.data}>
      <PageTitle>{item.key}</PageTitle>

      <DataView>
        <Subheading>{item.duration}</Subheading>
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
    </LinearGradient>

  );
}

export default DetailedData;
