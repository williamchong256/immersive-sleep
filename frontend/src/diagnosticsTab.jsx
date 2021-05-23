import * as React from 'react';
import { ScrollView } from 'react-native';
import {
  BodyText, CardTitle, DiagnosticsCard, DiagnosticsScroll, PageTitle,
} from './Themes';

export default function DiagnosticsTab() {
  const [showCond1, setshowCond1] = React.useState(true);
  const [showCond2, setshowCond2] = React.useState(true);
  const [showCond3, setshowCond3] = React.useState(true);
  const [showPred1, setshowPred1] = React.useState(true);
  const [showPred2, setshowPred2] = React.useState(true);
  const [showPred3, setshowPred3] = React.useState(true);

  return (
    <DiagnosticsScroll>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PageTitle data>Diagnostics</PageTitle>
        { showCond1 && (
          <DiagnosticsCard>
            <CardTitle>Pneumonia</CardTitle>
            <BodyText signin>
              The symptoms you seem to be exhibiting are correlated with pneumonia.
            </BodyText>
          </DiagnosticsCard>
        )}
        { showCond2 && (
        <DiagnosticsCard>
          <CardTitle>Tachycardia</CardTitle>
          <BodyText signin>
            Your heart rate is indicative of that seen in tachycardia.
          </BodyText>
        </DiagnosticsCard>
        )}
        { showCond3 && (
          <DiagnosticsCard>
            <CardTitle>Bradycardia</CardTitle>
            <BodyText signin>
              Your heart rate is indicative of that seen in bradycardia.
            </BodyText>
          </DiagnosticsCard>
        )}
        { showPred1 && (
          <DiagnosticsCard center>
            <CardTitle>Breathing Rate</CardTitle>
            <BodyText signin>
              Your breathing rate is showing a concerning trend.
            </BodyText>
          </DiagnosticsCard>
        )}
        { showPred2 && (
          <DiagnosticsCard center>
            <CardTitle>REM Sleep</CardTitle>
            <BodyText signin>
              Your sleep time in REM is going down.
            </BodyText>
          </DiagnosticsCard>
        )}
        { showPred3 && (
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
