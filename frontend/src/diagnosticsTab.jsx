import * as React from 'react';
import { ScrollView } from 'react-native';
import {
  BodyText, CardTitle, DiagnosticsCard, DiagnosticsScroll, PageTitle,
} from './Themes';

export default function DiagnosticsTab() {
  const [showCond1, setshowCond1] = React.useState(true);
  const [showCond2, setshowCond2] = React.useState(true);
  const [showCond3, setshowCond3] = React.useState(true);
  const [showCond4, setshowCond4] = React.useState(true);
  const [showPred1, setshowPred1] = React.useState(true);
  const [showPred2, setshowPred2] = React.useState(true);
  const [showPred3, setshowPred3] = React.useState(true);

  return (
    <DiagnosticsScroll>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PageTitle data>Diagnostics</PageTitle>
        { showCond1 && (
          <DiagnosticsCard>
            <CardTitle>Condition 1</CardTitle>
            <BodyText>Additional Info for Condition 1</BodyText>
          </DiagnosticsCard>
        )}
        { showCond2 && (
        <DiagnosticsCard>
          <CardTitle>Condition 2</CardTitle>
          <BodyText>Additional Info for Condition 2</BodyText>
        </DiagnosticsCard>
        )}
        { showCond3 && (
          <DiagnosticsCard>
            <CardTitle>Condition 3</CardTitle>
            <BodyText>Additional Info for Condition 3</BodyText>
          </DiagnosticsCard>
        )}
        { showCond4 && (
          <DiagnosticsCard>
            <CardTitle>Condition 4</CardTitle>
            <BodyText>Additional Info for Condition 4</BodyText>
          </DiagnosticsCard>
        )}
        { showPred1 && (
          <DiagnosticsCard center>
            <CardTitle>Prediction 1</CardTitle>
            <BodyText>Additional Info for Prediction 1</BodyText>
          </DiagnosticsCard>
        )}
        { showPred2 && (
          <DiagnosticsCard center>
            <CardTitle>Prediction 2</CardTitle>
            <BodyText>Additional Info for Prediction 2</BodyText>
          </DiagnosticsCard>
        )}
        { showPred3 && (
          <DiagnosticsCard center>
            <CardTitle>Prediction 3</CardTitle>
            <BodyText>Additional Info for Prediction 3</BodyText>
          </DiagnosticsCard>
        )}
      </ScrollView>
    </DiagnosticsScroll>
  );
}
