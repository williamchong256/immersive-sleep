import * as React from 'react';
import {
  Dimensions,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { LinearGradient } from 'expo-linear-gradient';
import { sampleData } from './sampleData.json';
import {
  CardTitle, CardView, PageTitle, PageView,
} from './Themes';

export default function DiagnosticsTab() {
  const daysOfTheWeek = sampleData.map((user) => user.key);
  const heartRateDiagnostics = sampleData.map((user) => user.heartRate);

  return (
    <PageView>
      <PageTitle>Diagnostics</PageTitle>
      <CardView>
        <LinearGradient colors={['#F9F6FF', '#CFDFF7']} style={{ padding: 20, paddingTop: 0, borderRadius: 10 }}>
          <CardTitle>Heart Rate Analysis</CardTitle>
          <LineChart
            data={{ labels: daysOfTheWeek, datasets: [{ data: heartRateDiagnostics }] }}
            height={200}
            width={Dimensions.get('window').width - 60}
            fromZero
            withShadow={false}
            chartConfig={{
              backgroundGradientFrom: '#A6CDF0',
              backgroundGradientTo: '#CFDFF7',
              color: () => 'rgba(0,0,0,1)',
            }}
            style={{ borderRadius: 10 }}
          />
        </LinearGradient>
      </CardView>
    </PageView>
  );
}
