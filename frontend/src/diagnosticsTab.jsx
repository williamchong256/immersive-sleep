import * as React from 'react';
import { ScrollView } from 'react-native';
import {
  BodyText, CardTitle, DiagnosticsCard, DiagnosticsScroll, PageTitle,
} from './Themes';

export default function DiagnosticsTab() {
  const showPneumonia = true;
  const showTachycardia = true;
  const showBradycardia = true;
  const showBreathing = true;
  const showREM = true;
  const showSeizures = true;

  return (
    <DiagnosticsScroll>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PageTitle data>Diagnostics</PageTitle>
        { showPneumonia && (
          <DiagnosticsCard>
            <CardTitle>Pneumonia</CardTitle>
            <BodyText signin>
              The symptoms you seem to be exhibiting are correlated with pneumonia.
            </BodyText>
          </DiagnosticsCard>
        )}
        { showTachycardia && (
        <DiagnosticsCard>
          <CardTitle>Tachycardia</CardTitle>
          <BodyText signin>
            Your heart rate is indicative of that seen in tachycardia.
          </BodyText>
        </DiagnosticsCard>
        )}
        { showBradycardia && (
          <DiagnosticsCard>
            <CardTitle>Bradycardia</CardTitle>
            <BodyText signin>
              Your heart rate is indicative of that seen in bradycardia.
            </BodyText>
          </DiagnosticsCard>
        )}
        { showBreathing && (
          <DiagnosticsCard center>
            <CardTitle>Breathing Rate</CardTitle>
            <BodyText signin>
              Your breathing rate is showing a concerning trend.
            </BodyText>
          </DiagnosticsCard>
        )}
        { showREM && (
          <DiagnosticsCard center>
            <CardTitle>REM Sleep</CardTitle>
            <BodyText signin>
              Your sleep time in REM is going down.
            </BodyText>
          </DiagnosticsCard>
        )}
        { showSeizures && (
          <DiagnosticsCard center>
            <CardTitle>Seizures/Head Tremors</CardTitle>
            <BodyText signin>
              Analysis of your sleep indicates head tremors or seizures during sleep
            </BodyText>
          </DiagnosticsCard>
        )}
      </ScrollView>
    </DiagnosticsScroll>
  );
}
