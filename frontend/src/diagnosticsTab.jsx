import * as React from 'react';
import {
  Dimensions, ScrollView,
} from 'react-native';
import { LineChart, BarChart, ProgressChart } from 'react-native-chart-kit';
import { sampleData } from './sampleData.json';
import {
  CardTitle, DiagnosticsCard, DiagnosticsScroll, PageTitle,
} from './Themes';

export default function DiagnosticsTab() {
  const daysOfTheWeek = sampleData.map((user) => user.key);
  const heartRateDiagnostics = sampleData.map((user) => user.heartRate);
  const durationDiagnostics = sampleData.map((user) => user.duration);
  const breathingDiagnostics = sampleData.map((user) => user.breathing);

  return (
    <DiagnosticsScroll>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PageTitle data>Diagnostics</PageTitle>
        <DiagnosticsCard>
          <CardTitle>Heart Rate Analysis</CardTitle>
          <LineChart
            data={{ labels: daysOfTheWeek, datasets: [{ data: heartRateDiagnostics }] }}
            height={200}
            width={Dimensions.get('window').width - 60}
            fromZero
            withShadow={false}
            chartConfig={{
              backgroundGradientFrom: '#F9F6FF',
              backgroundGradientTo: '#F9F6FF',
              color: () => 'rgba(0,0,0,1)',
            }}
            style={{ borderRadius: 10 }}
          />
        </DiagnosticsCard>
        <DiagnosticsCard>
          <CardTitle>Breathing Analysis</CardTitle>
          <LineChart
            data={{ labels: daysOfTheWeek, datasets: [{ data: breathingDiagnostics }] }}
            height={200}
            width={Dimensions.get('window').width - 60}
            fromZero
            withShadow={false}
            chartConfig={{
              backgroundGradientFrom: '#F9F6FF',
              backgroundGradientTo: '#F9F6FF',
              color: () => 'rgba(0,0,0,1)',
            }}
            style={{ borderRadius: 10 }}
          />
        </DiagnosticsCard>
        <DiagnosticsCard>
          <CardTitle>Sleep Duration</CardTitle>
          <BarChart
            data={{ labels: daysOfTheWeek, datasets: [{ data: durationDiagnostics }] }}
            height={200}
            width={Dimensions.get('window').width - 60}
            withShadow={false}
            withInnerLines={false}
            withHorizontalLabels={false}
            showValuesOnTopOfBars
            fromZero
            chartConfig={{
              backgroundGradientFrom: '#F9F6FF',
              backgroundGradientTo: '#F9F6FF',
              barPercentage: 0.8,
              decimalPlaces: 0,
              color: () => 'rgba(0,0,0,1)',
            }}
            style={{ borderRadius: 10, paddingRight: 0 }}
          />
        </DiagnosticsCard>
        <DiagnosticsCard>
          <CardTitle>Sleep Cycles</CardTitle>
          <ProgressChart
            data={{ labels: ['Deep Sleep', 'REM Sleep', 'Light Sleep'], data: [0.55, 0.35, 0.75] }}
            height={200}
            width={Dimensions.get('window').width - 60}
            fromZero
            strokeWidth={15}
            chartConfig={{
              backgroundGradientFrom: '#F9F6FF',
              backgroundGradientTo: '#F9F6FF',
              color: (opacity = 1) => `rgba(166, 205, 240, ${opacity})`,
              labelColor: () => 'rgba(0,0,0,1)',
            }}
            style={{ borderRadius: 10 }}
          />
        </DiagnosticsCard>
      </ScrollView>
    </DiagnosticsScroll>
  );
}
